import clsx from 'clsx';
import type { ReactNode } from 'react';

import { SECTION_HEADING_CLASSNAME, type SectionHeadingVariant } from './constants';

interface SectionHeadingProps {
  variant?: SectionHeadingVariant;
  className?: string;
  children: ReactNode;
  'data-aos'?: string;
  'data-aos-offset'?: string;
  'data-aos-duration'?: string;
}

export function SectionHeading({ variant = 'title', className, children, ...aosProps }: SectionHeadingProps) {
  return (
    <h2
      className={clsx(SECTION_HEADING_CLASSNAME[variant], className)}
      {...aosProps}
    >
      {children}
    </h2>
  );
}
