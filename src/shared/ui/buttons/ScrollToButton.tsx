import clsx from 'clsx';
import type { IconType } from 'react-icons';

import { useDevice } from '@/shared/hooks';

interface ScrollToButtonVisibility {
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
}

interface ScrollToButtonProps {
  href: string;
  label: string;
  icon: IconType;
  iconPosition?: 'start' | 'end';
  isVisible?: boolean;
  visibility?: ScrollToButtonVisibility;
  className?: string;
}

export function ScrollToButton({
  href,
  label,
  icon: Icon,
  iconPosition = 'end',
  isVisible = true,
  visibility,
  className,
}: ScrollToButtonProps) {
  const { isMobile, isTablet, isDesktop } = useDevice();

  const isHiddenForBreakpoint =
    (isMobile && visibility?.mobile === false) ||
    (isTablet && visibility?.tablet === false) ||
    (isDesktop && visibility?.desktop === false);

  if (isHiddenForBreakpoint) {
    return null;
  }

  const icon = (
    <Icon
      className="animate-bounce"
      size={20}
      aria-hidden="true"
    />
  );

  return (
    <a
      href={href}
      className={clsx('scroll-cue', { 'is-hidden': !isVisible }, className)}
    >
      {iconPosition === 'start' && icon}
      <span>{label}</span>
      {iconPosition === 'end' && icon}
    </a>
  );
}
