import clsx from 'clsx';
import type { CSSProperties, ReactNode } from 'react';

import type { ButtonSize } from '@/shared/ui/buttons/Button';
import { TAG_CLASSNAME, TAG_HOVERABLE_CLASSNAME } from './constants';

interface TagProps {
  size?: ButtonSize;
  hoverable?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function Tag({ size = 'small', hoverable, className, style, children }: TagProps) {
  return (
    <span
      className={clsx(TAG_CLASSNAME[size], hoverable && TAG_HOVERABLE_CLASSNAME, className)}
      style={style}
    >
      {children}
    </span>
  );
}
