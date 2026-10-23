import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeToggle } from './ThemeToggle';

describe('ThemeToggle', () => {
  it('should call onToggleTheme when pressed', () => {
    const onToggleTheme = vi.fn();
    render(
      <ThemeToggle
        theme="light"
        onToggleTheme={onToggleTheme}
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('should be an accessible, labeled control regardless of theme', () => {
    const { rerender } = render(
      <ThemeToggle
        theme="light"
        onToggleTheme={() => {}}
      />
    );
    expect(screen.getByRole('button')).toHaveAccessibleName();

    rerender(
      <ThemeToggle
        theme="dark"
        onToggleTheme={() => {}}
      />
    );
    expect(screen.getByRole('button')).toHaveAccessibleName();
  });
});
