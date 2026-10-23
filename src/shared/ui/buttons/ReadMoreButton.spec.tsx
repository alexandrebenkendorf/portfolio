import { fireEvent, render, screen } from '@testing-library/react';

import { ReadMoreButton } from './ReadMoreButton';

describe('ReadMoreButton', () => {
  it('should show the closed label and aria-expanded=false when collapsed', () => {
    render(
      <ReadMoreButton
        isOpen={false}
        onClick={() => {}}
        openLabel="Show less"
        closedLabel="Read more"
      />
    );

    const button = screen.getByRole('button', { name: 'Read more' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should show the open label and aria-expanded=true when expanded', () => {
    render(
      <ReadMoreButton
        isOpen
        onClick={() => {}}
        openLabel="Show less"
        closedLabel="Read more"
      />
    );

    const button = screen.getByRole('button', { name: 'Show less' });
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should call onClick when pressed', () => {
    const onClick = vi.fn();
    render(
      <ReadMoreButton
        isOpen={false}
        onClick={onClick}
        openLabel="Show less"
        closedLabel="Read more"
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Read more' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
