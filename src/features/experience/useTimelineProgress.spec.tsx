import { act, render } from '@testing-library/react';

import { useTimelineProgress } from './useTimelineProgress';

function TestComponent({ withElements = true }: { withElements?: boolean }) {
  useTimelineProgress();
  if (!withElements) return null;
  return (
    <div
      className="timeline-track"
      data-rect-key="track"
    >
      <div
        className="timeline-progress"
        data-rect-key="progress"
      />
      <div className="timeline-item">
        <span
          className="tl-dot"
          data-rect-key="dot-1"
        />
      </div>
      <div className="timeline-item">
        <span
          className="tl-dot"
          data-rect-key="dot-2"
        />
      </div>
    </div>
  );
}

// `documentTops` are document-relative (as if scrollY was 0); the mock derives each
// element's viewport-relative top from the current window.scrollY, the way a real
// browser's getBoundingClientRect would as the page scrolls.
function mockRects(documentTops: Record<string, number>) {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
    const documentTop = documentTops[this.dataset.rectKey ?? ''] ?? 0;
    const top = documentTop - window.scrollY;
    return {
      top,
      left: 0,
      right: 0,
      bottom: top,
      width: 0,
      height: this.dataset.rectKey === 'track' ? 400 : 0,
      x: 0,
      y: 0,
      toJSON() {},
    };
  });
  Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 1000 });
  Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    writable: true,
    configurable: true,
    value: 3000,
  });
}

describe('useTimelineProgress', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should do nothing when the timeline track or fill is missing', () => {
    expect(() => render(<TestComponent withElements={false} />)).not.toThrow();
  });

  it('should mark dots the fill has reached as passed, and the furthest one as current', () => {
    // scrollY=0 against these dimensions resolves to full progress (fillHeight=400):
    // dot-1 (top 50) is behind the fill, dot-2 (top 450) is ahead of it.
    mockRects({ track: 0, 'dot-1': 50, 'dot-2': 450 });

    const { container } = render(<TestComponent />);

    const [dot1, dot2] = Array.from(container.querySelectorAll('.tl-dot'));
    expect(dot1.closest('.timeline-item')).toHaveClass('line-passed');
    expect(dot1).toHaveClass('current');
    expect(dot2.closest('.timeline-item')).not.toHaveClass('line-passed');
    expect(dot2).not.toHaveClass('current');
  });

  it('should recompute the fill and current dot on scroll', () => {
    // Runs the scheduled frame synchronously so the test doesn't depend on a real animation frame.
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0);
      return 0;
    });
    mockRects({ track: 0, 'dot-1': 50, 'dot-2': 450 });

    const { container } = render(<TestComponent />);
    const [dot1, dot2] = Array.from(container.querySelectorAll('.tl-dot'));
    expect(dot1).toHaveClass('current');

    // scrollY=-600 resolves to zero progress: nothing is passed any more.
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: -600 });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(dot1).not.toHaveClass('current');
    expect(dot1.closest('.timeline-item')).not.toHaveClass('line-passed');
    expect(dot2).not.toHaveClass('current');
  });

  it('should remove its listeners and observers on unmount', () => {
    mockRects({ track: 0, 'dot-1': 50, 'dot-2': 450 });
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(<TestComponent />);
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
