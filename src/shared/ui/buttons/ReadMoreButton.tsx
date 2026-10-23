import clsx from 'clsx';
import { IoChevronDown } from 'react-icons/io5';

import { Button } from '@/shared/ui/buttons/Button';

interface ReadMoreButtonProps {
  isOpen: boolean;
  onClick: () => void;
  openLabel: string;
  closedLabel: string;
  color?: 'default' | 'primary';
  className?: string;
}

export function ReadMoreButton({
  isOpen,
  onClick,
  openLabel,
  closedLabel,
  color = 'default',
  className,
}: ReadMoreButtonProps) {
  return (
    <Button
      variant="text"
      size="large"
      icon={IoChevronDown}
      iconPosition="end"
      iconSize={12}
      iconClassName={clsx('transition-transform duration-250', isOpen && 'rotate-180')}
      onClick={onClick}
      aria-expanded={isOpen}
      className={clsx('w-fit', color === 'primary' && 'text-accent-text!', className)}
    >
      {isOpen ? openLabel : closedLabel}
    </Button>
  );
}
