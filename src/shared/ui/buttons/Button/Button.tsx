import clsx from 'clsx';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

import { Tooltip } from '@/shared/ui/Tooltip';

import {
  BUTTON_CIRCLE_SIZE_CLASSES,
  ICON_SIZE,
  SIZE_CLASSES,
  VARIANT_BASE,
  type ButtonSize,
  type ButtonVariant,
} from './constants';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconType;
  iconPosition?: 'start' | 'end';
  iconSize?: number;
  iconClassName?: string;
  /** Forces the fixed square "icon-only" sizing regardless of variant. Auto-detected when an `icon` is passed without `children`. */
  iconOnly?: boolean;
  tooltip?: string;
  tooltipPosition?: 'side' | 'top';
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string;
  'aria-expanded'?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Button({
  variant = 'default',
  size = 'medium',
  icon: Icon,
  iconPosition = 'start',
  iconSize,
  iconClassName,
  iconOnly,
  tooltip,
  tooltipPosition = 'top',
  href,
  download,
  target,
  rel,
  onClick,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const ariaLabel = rest['aria-label'];
  const ariaExpanded = rest['aria-expanded'];
  const isIconOnly = iconOnly ?? (Boolean(Icon) && !children);
  const classes = clsx(
    'inline-flex shrink-0 items-center justify-center gap-1.5',
    VARIANT_BASE[variant],
    isIconOnly ? BUTTON_CIRCLE_SIZE_CLASSES[size] : SIZE_CLASSES[variant][size],
    className
  );
  const resolvedIconSize = iconSize ?? ICON_SIZE[variant][size];

  const iconElement = !!Icon && (
    <Icon
      size={resolvedIconSize}
      className={iconClassName}
      aria-hidden="true"
    />
  );

  const content = (
    <>
      {iconPosition === 'start' && iconElement}
      {children}
      {iconPosition === 'end' && iconElement}
    </>
  );

  const commonProps = {
    'aria-label': ariaLabel,
    'aria-expanded': ariaExpanded,
    onClick,
    className: classes,
  };

  const element = href ? (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      {...commonProps}
    >
      {content}
    </a>
  ) : (
    <button
      type="button"
      {...commonProps}
    >
      {content}
    </button>
  );

  if (!tooltip) {
    return element;
  }

  return (
    <Tooltip
      label={tooltip}
      position={tooltipPosition}
    >
      {element}
    </Tooltip>
  );
}
