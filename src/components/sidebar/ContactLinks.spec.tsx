import { fireEvent, render, screen } from '@testing-library/react';

import * as hooks from '@/shared/hooks';
import { DeviceType } from '@/shared/hooks/useDevice/constants';

import { ContactLinks } from './ContactLinks';

vi.mock('@/shared/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/shared/hooks')>();
  return { ...actual, useDevice: vi.fn() };
});

describe('ContactLinks', () => {
  beforeEach(() => {
    vi.mocked(hooks.useDevice).mockReturnValue({
      deviceType: DeviceType.MOBILE,
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should use the compact desktop button size on desktop', () => {
    vi.mocked(hooks.useDevice).mockReturnValue({
      deviceType: DeviceType.DESKTOP,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    });

    render(<ContactLinks />);

    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveClass('h-8', 'w-8');
  });

  it('should open LinkedIn and GitHub safely in a new tab', () => {
    render(<ContactLinks />);

    const linkedin = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/alexandrebenkendorf/');
    expect(linkedin).toHaveAttribute('target', '_blank');
    expect(linkedin).toHaveAttribute('rel', 'noopener noreferrer');

    const github = screen.getByRole('link', { name: /github/i });
    expect(github).toHaveAttribute('href', 'https://github.com/alexandrebenkendorf/');
    expect(github).toHaveAttribute('target', '_blank');
    expect(github).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should offer the CV as a download link to the correct file', () => {
    render(<ContactLinks />);

    const resume = screen.getByRole('link', { name: /resume|cv/i });
    expect(resume).toHaveAttribute('download', 'Alexandre Benkendorf - CV.pdf');
    expect(decodeURI(resume.getAttribute('href') ?? '')).toBe('/CV Alexandre Benkendorf - 2026 - en.pdf');
  });

  it('should open the mail client with the decoded address, not a plaintext one in the DOM', () => {
    const originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      writable: true,
      configurable: true,
      value: { href: '' },
    });

    render(<ContactLinks />);
    fireEvent.click(screen.getByRole('button', { name: /mail/i }));

    expect(window.location.href).toBe('mailto:alex+portfolio@alexandrebenkendorf.com');

    Object.defineProperty(window, 'location', { writable: true, configurable: true, value: originalLocation });
  });
});
