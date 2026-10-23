import { render, screen } from '@testing-library/react';
import { IoChevronDown } from 'react-icons/io5';

import * as hooks from '@/shared/hooks';
import { DeviceType } from '@/shared/hooks/useDevice/constants';

import { ScrollToButton } from './ScrollToButton';

vi.mock('@/shared/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/shared/hooks')>();
  return { ...actual, useDevice: vi.fn() };
});

function mockDevice(overrides: Partial<ReturnType<typeof hooks.useDevice>>) {
  vi.mocked(hooks.useDevice).mockReturnValue({
    deviceType: DeviceType.DESKTOP,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    ...overrides,
  });
}

describe('ScrollToButton', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the label linking to the given href', () => {
    mockDevice({});
    render(
      <ScrollToButton
        href="#top"
        label="Back to top"
        icon={IoChevronDown}
      />
    );

    expect(screen.getByRole('link', { name: 'Back to top' })).toHaveAttribute('href', '#top');
  });

  it('should render the icon after the label by default', () => {
    mockDevice({});
    render(
      <ScrollToButton
        href="#top"
        label="Back to top"
        icon={IoChevronDown}
      />
    );

    const link = screen.getByRole('link', { name: 'Back to top' });
    expect(link.querySelector('svg')?.previousSibling?.textContent).toBe('Back to top');
  });

  it('should render the icon before the label when iconPosition is "start"', () => {
    mockDevice({});
    render(
      <ScrollToButton
        href="#top"
        label="Back to top"
        icon={IoChevronDown}
        iconPosition="start"
      />
    );

    const link = screen.getByRole('link', { name: 'Back to top' });
    expect(link.querySelector('svg')?.nextSibling?.textContent).toBe('Back to top');
  });

  it('should apply the hidden state class when isVisible is false', () => {
    mockDevice({});
    render(
      <ScrollToButton
        href="#top"
        label="Back to top"
        icon={IoChevronDown}
        isVisible={false}
      />
    );

    expect(screen.getByRole('link', { name: 'Back to top' })).toHaveClass('is-hidden');
  });

  it('should not render on mobile when visibility.mobile is false', () => {
    mockDevice({ deviceType: DeviceType.MOBILE, isMobile: true, isDesktop: false });
    render(
      <ScrollToButton
        href="#top"
        label="Back to top"
        icon={IoChevronDown}
        visibility={{ mobile: false }}
      />
    );

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should not render on tablet when visibility.tablet is false', () => {
    mockDevice({ deviceType: DeviceType.TABLET, isTablet: true, isDesktop: false });
    render(
      <ScrollToButton
        href="#top"
        label="Back to top"
        icon={IoChevronDown}
        visibility={{ tablet: false }}
      />
    );

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should not render on desktop when visibility.desktop is false', () => {
    mockDevice({});
    render(
      <ScrollToButton
        href="#top"
        label="Back to top"
        icon={IoChevronDown}
        visibility={{ desktop: false }}
      />
    );

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
