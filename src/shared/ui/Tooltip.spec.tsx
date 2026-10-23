import { render, screen } from '@testing-library/react';

import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('should render its children alongside the label', () => {
    render(
      <Tooltip label="Send mail">
        <button type="button">Mail</button>
      </Tooltip>
    );

    expect(screen.getByRole('button', { name: 'Mail' })).toBeInTheDocument();
    expect(screen.getByText('Send mail')).toBeInTheDocument();
  });

  it('should default to the top position class', () => {
    render(
      <Tooltip label="Send mail">
        <button type="button">Mail</button>
      </Tooltip>
    );

    expect(screen.getByText('Send mail')).toHaveClass('icon-tooltip-top');
  });

  it('should use the side position class when position is "side"', () => {
    render(
      <Tooltip
        label="Send mail"
        position="side"
      >
        <button type="button">Mail</button>
      </Tooltip>
    );

    expect(screen.getByText('Send mail')).toHaveClass('icon-tooltip-side');
  });
});
