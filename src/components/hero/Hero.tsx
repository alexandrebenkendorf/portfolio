import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { IoChevronDown } from 'react-icons/io5';

import { useDevice } from '@/shared/hooks';
import { Button, ScrollToButton } from '@/shared/ui';

import { FloatingCards } from './FloatingCards';
import { LogoMarquee } from './LogoMarquee';
import { Stats } from './Stats';
import { useScrollCueVisibility } from './useScrollCueVisibility';

export function Hero() {
  const { t } = useTranslation();
  const isScrollCueVisible = useScrollCueVisibility();
  const { isDesktop } = useDevice();

  return (
    <section
      className={clsx('flex flex-col gap-10 pt-4 pb-16 sm:py-4', {
        'min-h-[calc(100vh-(--spacing(16)))]': !isDesktop,
        'min-h-screen': isDesktop,
      })}
    >
      <div className="flex flex-1 items-center">
        <div className="flex w-full flex-wrap gap-8">
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-8 justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-text m-0 text-4xl sm:text-4xl leading-[1.2] font-bold tracking-[-0.02em]">
                {t('hero.heading')}
              </h1>
              <p className="text-text-faint m-0 max-w-120 text-lg leading-[1.6]">{t('hero.paragraph')}</p>
            </div>

            <Stats />

            <Button
              href="#experience"
              variant="primary"
              size="large"
              className="w-fit"
            >
              {t('hero.cta')}
            </Button>
          </div>

          <FloatingCards />
        </div>
      </div>

      <div className="flex w-full flex-col items-center">
        <LogoMarquee />

        <ScrollToButton
          href="#stack"
          label={t('hero.scrollCue')}
          icon={IoChevronDown}
          iconPosition="end"
          isVisible={isScrollCueVisible}
          visibility={{ mobile: false }}
          className="mt-12"
        />
      </div>
    </section>
  );
}
