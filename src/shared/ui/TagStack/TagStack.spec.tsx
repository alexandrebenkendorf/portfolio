import { fireEvent, render, screen } from '@testing-library/react';

import { TagStack } from './TagStack';

describe('TagStack', () => {
  it('should render nothing for an empty tag list', () => {
    const { container } = render(<TagStack tags={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render every tag with no toggle when there are 5 or fewer', () => {
    const tags = ['React', 'TypeScript', 'Vite', 'Tailwind', 'Vitest'];
    render(<TagStack tags={tags} />);

    tags.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should hide tags beyond the visible count behind a toggle', () => {
    const tags = ['React', 'TypeScript', 'Vite', 'Tailwind', 'Vitest', 'ESLint', 'Prettier'];
    render(<TagStack tags={tags} />);

    tags.slice(0, 5).forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
    tags.slice(5).forEach((tag) => expect(screen.queryByText(tag)).not.toBeInTheDocument());

    const toggle = screen.getByRole('button', { name: /show 2 more technologies/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveTextContent('+2');
  });

  it('should expand and collapse the hidden tags, toggling aria-expanded', () => {
    const tags = ['React', 'TypeScript', 'Vite', 'Tailwind', 'Vitest', 'ESLint', 'Prettier'];
    render(<TagStack tags={tags} />);

    const toggle = screen.getByRole('button');
    fireEvent.click(toggle);

    tags.slice(5).forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveTextContent('−');

    fireEvent.click(toggle);

    tags.slice(5).forEach((tag) => expect(screen.queryByText(tag)).not.toBeInTheDocument());
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
