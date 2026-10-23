import { act, render, screen } from '@testing-library/react';

import { useLanguage } from './useLanguage';

function TestComponent() {
  const { language, setLanguage } = useLanguage();
  return (
    <div>
      <span data-testid="language">{language}</span>
      <button
        type="button"
        onClick={() => setLanguage('pt')}
      >
        Switch to PT
      </button>
    </div>
  );
}

describe('useLanguage', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = '';
  });

  it('should set <html lang> to the current language on mount', () => {
    render(<TestComponent />);

    expect(document.documentElement.lang).toBe(screen.getByTestId('language').textContent);
  });

  it('should update <html lang> and persist the choice when the language changes', async () => {
    render(<TestComponent />);

    await act(async () => {
      screen.getByRole('button', { name: /switch to pt/i }).click();
    });

    expect(screen.getByTestId('language')).toHaveTextContent('pt');
    expect(document.documentElement.lang).toBe('pt');
    expect(localStorage.getItem('language')).toBe('pt');
  });
});
