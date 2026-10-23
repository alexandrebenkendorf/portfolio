import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import logoDark from '@/shared/assets/logo-dark.svg';
import logoLight from '@/shared/assets/logo-light.svg';
import type { Language } from '@/shared/i18n';
import { Button } from '@/shared/ui';
import { SitePanel } from '@/components/site-panel/SitePanel';

interface TopBarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  language: Language;
  onSetLanguage: (language: Language) => void;
}

export function TopBar({ theme, onToggleTheme, language, onSetLanguage }: TopBarProps) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const { style } = document.documentElement;
    const previousOverflow = style.overflow;
    style.overflow = 'hidden';
    return () => {
      style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-bg border-border fixed inset-x-0 top-0 z-30 border-b transition-colors duration-250">
      <div className="mx-auto flex h-16 w-full max-w-330 items-center justify-between gap-4 px-8 max-[560px]:px-5">
        <a
          href="#top"
          aria-label={t('sidebar.backToTop')}
          className="flex shrink-0 items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            className="logo-mark block h-4 w-auto"
            src={theme === 'dark' ? logoDark : logoLight}
            alt=""
            aria-hidden="true"
          />
        </a>

        <Button
          variant="text"
          size="small"
          iconOnly
          aria-label={isMenuOpen ? t('sidebar.closeMenuAria') : t('sidebar.openMenuAria')}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={clsx('hamburger-box', isMenuOpen && 'is-open')}>
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </span>
        </Button>
      </div>

      <div
        className={clsx('mobile-menu', isMenuOpen && 'is-open')}
        inert={!isMenuOpen}
      >
        <SitePanel
          theme={theme}
          onToggleTheme={onToggleTheme}
          language={language}
          onSetLanguage={onSetLanguage}
          onNavigate={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  );
}
