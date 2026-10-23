import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { IoGlobeOutline, IoLocationOutline } from 'react-icons/io5';

import { useActiveSection, useDevice } from '@/shared/hooks';
import type { Language } from '@/shared/i18n';
import { LanguageSwitcher, ThemeToggle } from '@/shared/ui';
import { ContactLinks } from '@/components/sidebar/ContactLinks';

interface SitePanelProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  language: Language;
  onSetLanguage: (language: Language) => void;
  onNavigate?: () => void;
}

export function SitePanel({ theme, onToggleTheme, language, onSetLanguage, onNavigate }: SitePanelProps) {
  const { t } = useTranslation();
  const activeSection = useActiveSection();
  const { isDesktop } = useDevice();
  const isTouchFriendly = !isDesktop;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <span
          className={clsx(
            'text-accent-text font-mono font-medium tracking-widest uppercase',
            isTouchFriendly ? 'text-base' : 'text-sm'
          )}
        >
          {t('sidebar.role1')}
        </span>
        <span
          className={clsx(
            'text-slate-500 font-mono tracking-wider leading-relaxed uppercase',
            isTouchFriendly ? 'text-sm' : 'text-xs'
          )}
        >
          {t('sidebar.role2')}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div className={clsx('text-slate-500 flex items-center gap-2', isTouchFriendly ? 'text-base' : 'text-sm')}>
          <IoLocationOutline
            size={14}
            aria-hidden="true"
          />
          {t('sidebar.location')}
        </div>

        <div className={clsx('text-slate-500 flex items-center gap-2', isTouchFriendly ? 'text-base' : 'text-sm')}>
          <IoGlobeOutline
            size={14}
            aria-hidden="true"
          />
          {t('sidebar.languages')}
        </div>
      </div>

      <nav className="flex flex-col gap-4">
        <a
          href="#stack"
          onClick={onNavigate}
          className={clsx(
            'group flex items-center gap-2.5 transition-colors duration-150',
            isTouchFriendly ? 'text-base' : 'text-sm',
            activeSection === 'stack' ? 'text-accent-text' : 'text-text'
          )}
        >
          <span
            className={clsx(
              'h-px transition-[width,background-color] duration-200',
              activeSection === 'stack'
                ? 'bg-accent w-6'
                : 'bg-text-faintest w-3.5 group-hover:bg-accent group-hover:w-6'
            )}
            aria-hidden="true"
          />
          {t('sidebar.navSkills')}
        </a>
        <a
          href="#experience"
          onClick={onNavigate}
          className={clsx(
            'group flex items-center gap-2.5 transition-colors duration-150',
            isTouchFriendly ? 'text-base' : 'text-sm',
            activeSection === 'experience' ? 'text-accent-text' : 'text-text'
          )}
        >
          <span
            className={clsx(
              'h-px transition-[width,background-color] duration-200',
              activeSection === 'experience'
                ? 'bg-accent w-6'
                : 'bg-text-faintest w-3.5 group-hover:bg-accent group-hover:w-6'
            )}
            aria-hidden="true"
          />
          {t('sidebar.navExperience')}
        </a>
        <a
          href="#open-source"
          onClick={onNavigate}
          className={clsx(
            'group flex items-center gap-2.5 transition-colors duration-150',
            isTouchFriendly ? 'text-base' : 'text-sm',
            activeSection === 'open-source' ? 'text-accent-text' : 'text-text'
          )}
        >
          <span
            className={clsx(
              'h-px transition-[width,background-color] duration-200',
              activeSection === 'open-source'
                ? 'bg-accent w-6'
                : 'bg-text-faintest w-3.5 group-hover:bg-accent group-hover:w-6'
            )}
            aria-hidden="true"
          />
          {t('sidebar.navOpenSource')}
        </a>
      </nav>

      <div className="border-border flex flex-col gap-4 border-t pt-6">
        <div className="flex flex-col gap-2">
          <div className={clsx('text-text font-bold', isTouchFriendly ? 'text-lg' : 'text-[17px]')}>
            {t('sidebar.contactHeading')}
          </div>
          <p className="text-slate-500 m-0 text-sm leading-[1.6]">{t('sidebar.contactBlurb')}</p>
        </div>
        <ContactLinks />
      </div>

      <div className="flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <LanguageSwitcher
            language={language}
            onSetLanguage={onSetLanguage}
            size={isTouchFriendly ? 'large' : 'small'}
          />
          <ThemeToggle
            theme={theme}
            onToggleTheme={onToggleTheme}
            size={isTouchFriendly ? 'large' : 'small'}
          />
        </div>
        <span className="text-text-faint font-mono text-xs">© 2026</span>
      </div>
    </div>
  );
}
