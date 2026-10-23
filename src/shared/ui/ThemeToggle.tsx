import { useTranslation } from 'react-i18next';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

import { Button, type ButtonSize } from '@/shared/ui/buttons/Button';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  size?: ButtonSize;
}

export function ThemeToggle({ theme, onToggleTheme, size = 'medium' }: ThemeToggleProps) {
  const { t } = useTranslation();
  const tooltip = theme === 'dark' ? t('sidebar.themeTooltipToLight') : t('sidebar.themeTooltipToDark');

  return (
    <Button
      size={size}
      icon={theme === 'dark' ? IoMoonOutline : IoSunnyOutline}
      aria-label={t('sidebar.toggleThemeAria')}
      tooltip={tooltip}
      onClick={onToggleTheme}
    />
  );
}
