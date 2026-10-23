import { act, render, screen } from '@testing-library/react';

import { useBackToTopVisibility } from './useBackToTopVisibility';

function TestComponent() {
  const isVisible = useBackToTopVisibility();
  return <span data-testid="visible">{String(isVisible)}</span>;
}

function setScrollLayout({
  scrollY,
  innerHeight = 800,
  scrollHeight = 2000,
}: {
  scrollY: number;
  innerHeight?: number;
  scrollHeight?: number;
}) {
  Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: scrollY });
  Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: innerHeight });
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    writable: true,
    configurable: true,
    value: scrollHeight,
  });
}

describe('useBackToTopVisibility', () => {
  it('should be hidden while far from the bottom of the page', () => {
    setScrollLayout({ scrollY: 0 });
    render(<TestComponent />);
    expect(screen.getByTestId('visible')).toHaveTextContent('false');
  });

  it('should become visible once within the threshold of the bottom', () => {
    // scrollHeight(2000) - innerHeight(800) - scrollY(1250) = -50px past the bottom
    setScrollLayout({ scrollY: 1250 });
    render(<TestComponent />);
    expect(screen.getByTestId('visible')).toHaveTextContent('true');
  });

  it('should update on scroll', () => {
    setScrollLayout({ scrollY: 0 });
    render(<TestComponent />);
    expect(screen.getByTestId('visible')).toHaveTextContent('false');

    setScrollLayout({ scrollY: 1250 });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    expect(screen.getByTestId('visible')).toHaveTextContent('true');
  });
});
