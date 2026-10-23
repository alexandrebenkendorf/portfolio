import { fireEvent, render, screen } from '@testing-library/react';

import { TopBar } from './TopBar';

function renderTopBar() {
  return render(
    <TopBar
      theme="light"
      onToggleTheme={() => {}}
      language="en"
      onSetLanguage={() => {}}
    />
  );
}

describe('TopBar', () => {
  afterEach(() => {
    document.documentElement.style.overflow = '';
  });

  it('should start with the mobile menu closed and scrolling enabled', () => {
    renderTopBar();

    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(document.documentElement.style.overflow).not.toBe('hidden');
  });

  it('should open the menu and lock scroll when the hamburger is pressed', () => {
    renderTopBar();

    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true');
    expect(document.documentElement.style.overflow).toBe('hidden');
  });

  it('should close the menu and restore scroll when toggled again', () => {
    renderTopBar();

    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    fireEvent.click(screen.getByRole('button', { name: /close menu/i }));

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false');
    expect(document.documentElement.style.overflow).not.toBe('hidden');
  });

  it('should close the menu and restore scroll when a nav link is clicked', () => {
    renderTopBar();

    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    expect(document.documentElement.style.overflow).toBe('hidden');

    fireEvent.click(screen.getByRole('link', { name: /experience/i }));

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false');
    expect(document.documentElement.style.overflow).not.toBe('hidden');
  });

  it('should close the menu when the logo link is clicked', () => {
    renderTopBar();

    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    expect(document.documentElement.style.overflow).toBe('hidden');

    fireEvent.click(screen.getByRole('link', { name: /back to top/i }));

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false');
    expect(document.documentElement.style.overflow).not.toBe('hidden');
  });
});
