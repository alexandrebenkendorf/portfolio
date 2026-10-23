import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { SectionHeading } from '@/shared/ui/SectionHeading/SectionHeading';

interface SectionProps extends Omit<ComponentPropsWithoutRef<'section'>, 'title'> {
  title: ReactNode;
  children: ReactNode;
}

export function Section({ title, className, children, ...rest }: SectionProps) {
  return (
    <section
      className={clsx('flex flex-col gap-9', className)}
      {...rest}
    >
      <SectionHeading
        data-aos="fade-up"
        data-aos-offset="0"
      >
        {title}
      </SectionHeading>
      {children}
    </section>
  );
}
