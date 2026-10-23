import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import type { Language } from '@/shared/i18n';
import type { ButtonSize } from '@/shared/ui/buttons/Button';

interface LanguageSwitcherProps {
  language: Language;
  onSetLanguage: (language: Language) => void;
  size?: ButtonSize;
}

interface LanguageLabelProps {
  label: string;
  isActive: boolean;
  sizeClasses: string;
}

function LanguageLabel({ label, isActive, sizeClasses }: LanguageLabelProps) {
  return (
    <span
      className={clsx(
        'relative z-10 font-mono transition-colors duration-200',
        sizeClasses,
        isActive ? 'text-text' : 'text-text-muted-strong'
      )}
    >
      {label}
    </span>
  );
}

interface SizeTokens {
  container: string;
  thumbInset: string;
  width: string;
  padding: string;
  text: string;
  translate: string;
}

const SIZE_CLASSES: Record<ButtonSize, SizeTokens> = {
  small: {
    container: 'h-8',
    thumbInset: 'top-0 bottom-0',
    width: 'w-[30px]',
    padding: '',
    text: 'text-xs',
    translate: 'translate-x-[30px]',
  },
  medium: {
    container: 'h-10',
    thumbInset: 'top-0 bottom-0',
    width: 'w-[38px]',
    padding: '',
    text: 'text-xs',
    translate: 'translate-x-[38px]',
  },
  large: {
    container: 'h-12',
    thumbInset: 'top-0 bottom-0',
    width: 'w-[46px]',
    padding: '',
    text: 'text-xs',
    translate: 'translate-x-[46px]',
  },
};

export function LanguageSwitcher({ language, onSetLanguage, size = 'medium' }: LanguageSwitcherProps) {
  const { t } = useTranslation();
  const { container, thumbInset, width, padding, text, translate } = SIZE_CLASSES[size];
  const buttonSizeClasses = `${width} ${padding} ${text}`;
  const isPortuguese = language === 'pt';

  return (
    <button
      type="button"
      aria-label={`PT / EN, ${isPortuguese ? t('sidebar.switchToEnglish') : t('sidebar.switchToPortuguese')}`}
      onClick={() => onSetLanguage(isPortuguese ? 'en' : 'pt')}
      className={`bg-tag-bg border-border relative flex cursor-pointer items-center rounded-full border ${container}`}
    >
      <span
        className={`bg-card-bg border-border-soft absolute rounded-full border shadow-[0_1px_2px_var(--color-border-strong)] transition-transform duration-200 ease-out ${thumbInset} ${width} ${
          isPortuguese ? 'translate-x-0' : translate
        }`}
        aria-hidden="true"
      />
      <LanguageLabel
        label="PT"
        isActive={isPortuguese}
        sizeClasses={buttonSizeClasses}
      />
      <LanguageLabel
        label="EN"
        isActive={!isPortuguese}
        sizeClasses={buttonSizeClasses}
      />
    </button>
  );
}
