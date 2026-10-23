import { render, screen } from '@testing-library/react';

import logoDark from '@/shared/assets/logo-dark.svg';
import logoLight from '@/shared/assets/logo-light.svg';

import { Sidebar } from './Sidebar';

function renderSidebar(theme: 'light' | 'dark') {
  return render(
    <Sidebar
      theme={theme}
      onToggleTheme={() => {}}
      language="en"
      onSetLanguage={() => {}}
    />
  );
}

describe('Sidebar', () => {
  it('should link back to the top of the page', () => {
    renderSidebar('light');

    expect(screen.getByRole('link', { name: /back to top/i })).toHaveAttribute('href', '#top');
  });

  it('should show the dark logo variant in dark theme', () => {
    const { container } = renderSidebar('dark');

    expect(container.querySelector('img')).toHaveAttribute('src', logoDark);
  });

  it('should show the light logo variant in light theme', () => {
    const { container } = renderSidebar('light');

    expect(container.querySelector('img')).toHaveAttribute('src', logoLight);
  });
});
