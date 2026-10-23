import clsx from 'clsx';
import type { ReactNode } from 'react';

interface TooltipProps {
  label: string;
  position?: 'top' | 'side';
  children: ReactNode;
}

export function Tooltip({ label, position = 'top', children }: TooltipProps) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span
        className={clsx('icon-tooltip', position === 'top' ? 'icon-tooltip-top' : 'icon-tooltip-side')}
        aria-hidden="true"
      >
        {label}
      </span>
    </span>
  );
}
