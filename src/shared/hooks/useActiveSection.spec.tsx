import { act, render, screen } from '@testing-library/react';

import { useActiveSection } from './useActiveSection';

function TestComponent() {
  const active = useActiveSection();
  return (
    <div>
      <span data-testid="active">{active ?? 'none'}</span>
      <div id="stack" />
      <div id="experience" />
      <div id="open-source" />
    </div>
  );
}

function mockLayout({
  tops,
  innerHeight = 1000,
  scrollY = 0,
  scrollHeight = 5000,
}: {
  tops: Record<string, number>;
  innerHeight?: number;
  scrollY?: number;
  scrollHeight?: number;
}) {
  Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: innerHeight });
  Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: scrollY });
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    writable: true,
    configurable: true,
    value: scrollHeight,
  });
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement): DOMRect {
    return {
      top: tops[this.id] ?? 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON() {},
    };
  });
}

describe('useActiveSection', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should activate the section whose top has crossed the activation line', () => {
    mockLayout({ tops: { stack: -100, experience: 500, 'open-source': 1200 } });
    render(<TestComponent />);
    expect(screen.getByTestId('active')).toHaveTextContent('stack');
  });

  it('should activate the latest section whose top has crossed the line, not the first', () => {
    mockLayout({ tops: { stack: -500, experience: -100, 'open-source': 1200 } });
    render(<TestComponent />);
    expect(screen.getByTestId('active')).toHaveTextContent('experience');
  });

  it('should be null when no section has reached the activation line yet', () => {
    mockLayout({ tops: { stack: 900, experience: 1500, 'open-source': 2200 } });
    render(<TestComponent />);
    expect(screen.getByTestId('active')).toHaveTextContent('none');
  });

  it('should fall back to the last section once the page is scrolled to the bottom', () => {
    mockLayout({
      tops: { stack: -900, experience: -500, 'open-source': 900 },
      scrollY: 4300,
      scrollHeight: 5000,
    });
    render(<TestComponent />);
    expect(screen.getByTestId('active')).toHaveTextContent('open-source');
  });

  it('should recompute which section is active on scroll', () => {
    mockLayout({ tops: { stack: -100, experience: 500, 'open-source': 1200 } });
    render(<TestComponent />);
    expect(screen.getByTestId('active')).toHaveTextContent('stack');

    mockLayout({ tops: { stack: -900, experience: -200, 'open-source': 900 } });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    expect(screen.getByTestId('active')).toHaveTextContent('experience');
  });
});
