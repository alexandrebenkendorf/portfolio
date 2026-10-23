import { render, screen } from '@testing-library/react';

import { useLocalizedExperience } from './useLocalizedExperience';

vi.mock('./experience.data', () => ({
  experience: [
    {
      id: 'alpha',
      dateRange: 'data-date',
      title: 'data-title',
      company: 'Data Co',
      companyMeta: 'data-meta',
      description: 'data-description',
      tags: ['x'],
      bullets: ['data-bullet-1', 'data-bullet-2'],
    },
    {
      id: 'beta',
      dateRange: 'data-date-2',
      title: 'data-title-2',
      company: 'Data Co 2',
      companyMeta: 'data-meta-2',
      description: 'data-description-2',
      tags: ['y'],
    },
  ],
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: unknown }) => {
      if (key === 'experienceEntries.alpha.title') return 'Translated Title';
      if (key === 'experienceEntries.alpha.company') return 'Translated Co';
      if (options && 'defaultValue' in options) return options.defaultValue;
      return key;
    },
    i18n: { language: 'en' },
  }),
}));

function TestComponent() {
  const entries = useLocalizedExperience();
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          {entry.id}|{entry.title}|{entry.company}|{entry.bullets?.join(',') ?? 'none'}
        </li>
      ))}
    </ul>
  );
}

describe('useLocalizedExperience', () => {
  it('should prefer a matching translation when one exists', () => {
    render(<TestComponent />);

    expect(screen.getByText('alpha|Translated Title|Translated Co|data-bullet-1,data-bullet-2')).toBeInTheDocument();
  });

  it('should fall back to the data file bullets and company when no translation matches', () => {
    render(<TestComponent />);

    expect(screen.getByText('beta|experienceEntries.beta.title|Data Co 2|none')).toBeInTheDocument();
  });

  it('should return undefined bullets for entries with none, without looking one up', () => {
    render(<TestComponent />);

    const betaItem = screen.getByText(/^beta\|/);
    expect(betaItem.textContent).toMatch(/\|none$/);
  });
});
