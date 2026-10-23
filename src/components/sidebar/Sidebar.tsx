import { useTranslation } from 'react-i18next';

import logoDark from '@/shared/assets/logo-dark.svg';
import logoLight from '@/shared/assets/logo-light.svg';
import type { Language } from '@/shared/i18n';
import { SitePanel } from '@/components/site-panel/SitePanel';

interface SidebarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  language: Language;
  onSetLanguage: (language: Language) => void;
}

export function Sidebar({ theme, onToggleTheme, language, onSetLanguage }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <aside className="sticky top-16 -ml-1.5 flex flex-col justify-center w-70 shrink-0 gap-8 pl-1.5">
      <a
        href="#top"
        aria-label={t('sidebar.backToTop')}
        className="flex shrink-0 items-center"
      >
        <img
          className="logo-mark block h-4 w-auto"
          src={theme === 'dark' ? logoDark : logoLight}
          alt=""
          aria-hidden="true"
        />
      </a>

      <SitePanel
        theme={theme}
        onToggleTheme={onToggleTheme}
        language={language}
        onSetLanguage={onSetLanguage}
      />
    </aside>
  );
}
