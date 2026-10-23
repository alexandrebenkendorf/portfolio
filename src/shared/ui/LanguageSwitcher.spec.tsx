import { fireEvent, render, screen } from '@testing-library/react';

import { LanguageSwitcher } from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
  it('should switch to Portuguese when currently English', () => {
    const onSetLanguage = vi.fn();
    render(
      <LanguageSwitcher
        language="en"
        onSetLanguage={onSetLanguage}
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onSetLanguage).toHaveBeenCalledWith('pt');
  });

  it('should switch to English when currently Portuguese', () => {
    const onSetLanguage = vi.fn();
    render(
      <LanguageSwitcher
        language="pt"
        onSetLanguage={onSetLanguage}
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onSetLanguage).toHaveBeenCalledWith('en');
  });

  it('should render both language labels', () => {
    render(
      <LanguageSwitcher
        language="en"
        onSetLanguage={() => {}}
      />
    );

    expect(screen.getByText('PT')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });
});
