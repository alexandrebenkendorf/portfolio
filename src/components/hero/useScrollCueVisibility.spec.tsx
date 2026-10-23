import { act, render, screen } from '@testing-library/react';

import { useScrollCueVisibility } from './useScrollCueVisibility';

function TestComponent() {
  const isVisible = useScrollCueVisibility();
  return <span data-testid="visible">{String(isVisible)}</span>;
}

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value });
}

describe('useScrollCueVisibility', () => {
  afterEach(() => {
    setScrollY(0);
  });

  it('should be visible before the page scrolls', () => {
    setScrollY(0);
    render(<TestComponent />);
    expect(screen.getByTestId('visible')).toHaveTextContent('true');
  });

  it('should hide once the page scrolls past the threshold', () => {
    setScrollY(0);
    render(<TestComponent />);

    setScrollY(80);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(screen.getByTestId('visible')).toHaveTextContent('false');
  });

  it('should reappear if scrolled back near the top', () => {
    setScrollY(80);
    render(<TestComponent />);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    expect(screen.getByTestId('visible')).toHaveTextContent('false');

    setScrollY(0);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    expect(screen.getByTestId('visible')).toHaveTextContent('true');
  });
});
