import { fireEvent, render, screen } from '@testing-library/react';
import { IoMailOutline } from 'react-icons/io5';

import { Button } from './Button';

describe('Button', () => {
  it('should render a button element by default', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('should render an anchor element when href is provided', () => {
    render(
      <Button
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        download="file.pdf"
      >
        Download
      </Button>
    );

    const link = screen.getByRole('link', { name: 'Download' });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('download', 'file.pdf');
  });

  it('should call onClick when pressed', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button', { name: 'Click me' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render the icon before children by default', () => {
    render(<Button icon={IoMailOutline}>Mail</Button>);

    const icon = screen.getByRole('button', { name: 'Mail' }).querySelector('svg');
    expect(icon?.nextSibling?.textContent).toBe('Mail');
  });

  it('should render the icon after children when iconPosition is "end"', () => {
    render(
      <Button
        icon={IoMailOutline}
        iconPosition="end"
      >
        Mail
      </Button>
    );

    const icon = screen.getByRole('button', { name: 'Mail' }).querySelector('svg');
    expect(icon?.previousSibling?.textContent).toBe('Mail');
  });

  it('should render icon-only, with no visible text, when given an icon and no children', () => {
    render(
      <Button
        icon={IoMailOutline}
        aria-label="Send mail"
      />
    );

    const button = screen.getByRole('button', { name: 'Send mail' });
    expect(button.textContent).toBe('');
  });

  it('should pass aria-expanded through to the underlying element', () => {
    render(<Button aria-expanded>Toggle</Button>);

    expect(screen.getByRole('button', { name: 'Toggle' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('should wrap the control in a tooltip when tooltip is provided', () => {
    render(
      <Button
        icon={IoMailOutline}
        aria-label="Send mail"
        tooltip="Send mail"
      />
    );

    expect(screen.getByText('Send mail')).toBeInTheDocument();
  });

  it('should not render a tooltip when tooltip is omitted', () => {
    render(
      <Button
        icon={IoMailOutline}
        aria-label="Send mail"
      />
    );

    expect(screen.queryByText('Send mail')).not.toBeInTheDocument();
  });
});
