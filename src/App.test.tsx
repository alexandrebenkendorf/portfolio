import { fireEvent, render, screen, within } from '@testing-library/react';

import { App } from './App';
import { experience } from './features/experience/experience.data';
import i18n from './shared/i18n';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
    void i18n.changeLanguage('en');
  });

  it('renders the hero heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /i design interfaces, then i build them to last/i })
    ).toBeInTheDocument();
  });

  it('renders every experience entry from the timeline', () => {
    render(<App />);
    const timeline = within(document.getElementById('experience') as HTMLElement);
    expect(timeline.getAllByText(/Nmbrs/).length).toBeGreaterThan(0);
    expect(timeline.getAllByText(/Ponta Grande Resort/).length).toBeGreaterThan(0);
  });

  it('renders every section with a stable, linkable id', () => {
    render(<App />);
    expect(document.getElementById('stack')).not.toBeNull();
    expect(document.getElementById('experience')).not.toBeNull();
    expect(document.getElementById('open-source')).not.toBeNull();
  });

  it('switches the whole page to Portuguese and sets <html lang>', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /switch to portuguese/i }));

    expect(document.documentElement.lang).toBe('pt');
    expect(
      screen.getByRole('heading', { name: /desenho interfaces\. desenvolvo soluções que duram\./i })
    ).toBeInTheDocument();
  });

  it('toggles the theme and flips the data-theme attribute', () => {
    render(<App />);

    const toggles = screen.getAllByRole('button', { name: /toggle dark mode/i });
    expect(toggles.length).toBeGreaterThan(0);
    const initialTheme = document.documentElement.getAttribute('data-theme');

    fireEvent.click(toggles[0]);

    expect(document.documentElement.getAttribute('data-theme')).not.toBe(initialTheme);
  });

  it('renders every experience entry exactly once', () => {
    render(<App />);
    const timeline = within(document.getElementById('experience') as HTMLElement);
    experience.forEach((entry) => {
      expect(timeline.getAllByText(entry.title).length).toBeGreaterThan(0);
    });
  });

  it('renders the sidebar instead of the topbar at desktop widths', () => {
    const originalMatchMedia = window.matchMedia;
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: (query: string) => ({
        matches: query === '(min-width: 1024px)',
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });

    render(<App />);

    expect(screen.queryByRole('button', { name: /open menu/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to top/i })).toBeInTheDocument();

    Object.defineProperty(window, 'matchMedia', { writable: true, configurable: true, value: originalMatchMedia });
  });
});
