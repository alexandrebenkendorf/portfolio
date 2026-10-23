import { fireEvent, render, screen } from '@testing-library/react';

import { CurrentExperienceCard } from './CurrentExperienceCard';
import type { ExperienceEntry } from './experience.data';

const bullets = ['Did the first thing', 'Did the second thing'];

const baseEntry: ExperienceEntry = {
  id: 'test-entry',
  dateRange: 'Jan 2020 — Now',
  title: 'Senior Test Engineer',
  company: 'Test Co',
  companyMeta: '· Remote',
  description: 'Writes thorough tests.',
  tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Vitest', 'ESLint', 'Prettier'],
  bullets,
  current: true,
};

describe('CurrentExperienceCard', () => {
  it('should not render a "read more" toggle when there are no bullets', () => {
    render(<CurrentExperienceCard entry={{ ...baseEntry, bullets: undefined }} />);
    expect(screen.queryByRole('button', { name: /read more|show less/i })).not.toBeInTheDocument();
  });

  it('should start expanded, and collapse and re-expand when toggled', () => {
    render(<CurrentExperienceCard entry={baseEntry} />);

    const readMore = screen.getByRole('button', { name: /show less/i });
    expect(readMore).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(bullets[0])).toBeInTheDocument();

    fireEvent.click(readMore);

    expect(screen.getByRole('button', { name: /read more/i })).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(screen.getByRole('button', { name: /read more/i }));

    expect(screen.getByRole('button', { name: /show less/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('should render the entry title, company and description', () => {
    render(<CurrentExperienceCard entry={baseEntry} />);

    expect(screen.getByText(baseEntry.title)).toBeInTheDocument();
    expect(screen.getByText(baseEntry.company, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(baseEntry.description)).toBeInTheDocument();
  });
});
