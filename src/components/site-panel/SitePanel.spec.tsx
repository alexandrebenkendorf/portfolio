import { render, screen } from '@testing-library/react';

import * as hooks from '@/shared/hooks';
import { DeviceType } from '@/shared/hooks/useDevice/constants';

import { SitePanel } from './SitePanel';

vi.mock('@/shared/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/shared/hooks')>();
  return { ...actual, useDevice: vi.fn() };
});

function renderSitePanel(isDesktop: boolean) {
  vi.mocked(hooks.useDevice).mockReturnValue({
    deviceType: isDesktop ? DeviceType.DESKTOP : DeviceType.MOBILE,
    isMobile: !isDesktop,
    isTablet: false,
    isDesktop,
  });

  return render(
    <SitePanel
      theme="light"
      onToggleTheme={() => {}}
      language="en"
      onSetLanguage={() => {}}
    />
  );
}

describe('SitePanel', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should use touch-friendly sizing outside of desktop', () => {
    renderSitePanel(false);

    expect(screen.getByText('Frontend engineer')).toHaveClass('text-base');
  });

  it('should use dense sizing on desktop', () => {
    renderSitePanel(true);

    expect(screen.getByText('Frontend engineer')).toHaveClass('text-sm');
  });

  it('should render the navigation links and contact heading', () => {
    renderSitePanel(true);

    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#stack');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: 'Open Source' })).toHaveAttribute('href', '#open-source');
    expect(screen.getByText("Let's talk")).toBeInTheDocument();
  });

  it('should call onNavigate when a nav link is clicked', () => {
    vi.mocked(hooks.useDevice).mockReturnValue({
      deviceType: DeviceType.MOBILE,
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    });
    const onNavigate = vi.fn();
    render(
      <SitePanel
        theme="light"
        onToggleTheme={() => {}}
        language="en"
        onSetLanguage={() => {}}
        onNavigate={onNavigate}
      />
    );

    screen.getByRole('link', { name: 'Skills' }).click();

    expect(onNavigate).toHaveBeenCalledTimes(1);
  });
});
