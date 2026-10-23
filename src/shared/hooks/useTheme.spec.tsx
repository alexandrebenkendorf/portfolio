import { act, render, screen } from '@testing-library/react';

import { useTheme } from './useTheme';

function TestComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button
        type="button"
        onClick={toggleTheme}
      >
        Toggle theme
      </button>
    </div>
  );
}

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('favicon-theme')?.remove();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  });

  it('should default to the saved theme in localStorage', () => {
    localStorage.setItem('theme', 'dark');

    render(<TestComponent />);

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should fall back to the system preference when nothing is saved', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });

    render(<TestComponent />);

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('should toggle the theme, persist it, and swap the favicon', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('theme')).toHaveTextContent('light');

    act(() => {
      screen.getByRole('button', { name: /toggle theme/i }).click();
    });

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    const favicon = document.getElementById('favicon-theme') as HTMLLinkElement;
    expect(favicon.href).toContain('/favicon-dark.svg');
  });

  it('should toggle back to light when pressed a second time', () => {
    render(<TestComponent />);

    act(() => {
      screen.getByRole('button', { name: /toggle theme/i }).click();
    });
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');

    act(() => {
      screen.getByRole('button', { name: /toggle theme/i }).click();
    });

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(localStorage.getItem('theme')).toBe('light');
    const favicon = document.getElementById('favicon-theme') as HTMLLinkElement;
    expect(favicon.href).toContain('/favicon-light.svg');
  });
});
