import { useTranslation } from 'react-i18next';
import { IoChevronUp } from 'react-icons/io5';

import { Hero } from '@/components/hero/Hero';
import { useFloatCardEffects } from '@/components/hero/useFloatCardEffects';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { TopBar } from '@/components/topbar/TopBar';
import { Experience } from '@/features/experience/Experience';
import { useTimelineProgress } from '@/features/experience/useTimelineProgress';
import { OpenSource } from '@/features/open-source/OpenSource';
import { Skills } from '@/features/skills/Skills';
import { useBackToTopVisibility, useDevice, useLanguage, useScrollReveal, useTheme } from '@/shared/hooks';
import '@/shared/i18n';
import { ScrollToButton } from '@/shared/ui';
import clsx from 'clsx';

export function App() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { isDesktop } = useDevice();
  const isBackToTopVisible = useBackToTopVisibility();

  useScrollReveal(language);
  useFloatCardEffects();
  useTimelineProgress();

  return (
    <div className="flex flex-col bg-bg text-text w-full min-w-0 overflow-x-clip">
      {!isDesktop && (
        <TopBar
          theme={theme}
          onToggleTheme={toggleTheme}
          language={language}
          onSetLanguage={setLanguage}
        />
      )}

      <main
        id="top"
        className={clsx('flex mx-auto w-full max-w-330 items-start gap-14 px-8 pb-8 max-[560px]:px-5', {
          'overflow-hidden pt-24': !isDesktop,
        })}
      >
        {!!isDesktop && (
          <Sidebar
            theme={theme}
            onToggleTheme={toggleTheme}
            language={language}
            onSetLanguage={setLanguage}
          />
        )}

        <div className="flex flex-col w-full min-w-0">
          <Hero />
          <Skills />
          <Experience />
          <OpenSource />
          <ScrollToButton
            href="#top"
            label={t('footer.backToTop')}
            icon={IoChevronUp}
            iconPosition="start"
            isVisible={isBackToTopVisible}
            className="mx-auto mt-4 w-fit"
          />
        </div>
      </main>
    </div>
  );
}
