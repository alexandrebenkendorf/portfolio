import { fireEvent, render, screen } from '@testing-library/react';

import { ExperienceItem } from './ExperienceItem';
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
};

describe('ExperienceItem', () => {
  it('should not render a "read more" toggle when there are no bullets', () => {
    render(<ExperienceItem entry={{ ...baseEntry, bullets: undefined }} />);
    expect(screen.queryByRole('button', { name: /read more/i })).not.toBeInTheDocument();
  });

  it('should expand and collapse the bullet list independently of the tag toggle', () => {
    render(<ExperienceItem entry={baseEntry} />);

    const readMore = screen.getByRole('button', { name: /read more/i });
    const tagToggle = screen.getByRole('button', { name: /show 2 more technologies/i });
    expect(readMore).toHaveAttribute('aria-expanded', 'false');
    expect(tagToggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(readMore);

    expect(screen.getByRole('button', { name: /show less/i })).toHaveAttribute('aria-expanded', 'true');
    expect(tagToggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText(bullets[0])).toBeInTheDocument();

    fireEvent.click(tagToggle);

    expect(screen.getByRole('button', { name: /show less/i })).toHaveAttribute('aria-expanded', 'true');
    expect(tagToggle).toHaveAttribute('aria-expanded', 'true');
  });

  it('should render the entry title, company and description', () => {
    render(<ExperienceItem entry={baseEntry} />);

    expect(screen.getByText(baseEntry.title)).toBeInTheDocument();
    expect(screen.getByText(baseEntry.company, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(baseEntry.description)).toBeInTheDocument();
  });
});
