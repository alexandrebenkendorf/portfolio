export type ButtonVariant = 'primary' | 'default' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

// Dimensions for a circular icon control (the Button "default" variant). Exposed
// so other circular controls (theme toggle, language switcher) can match a given
// size exactly.
export const BUTTON_CIRCLE_SIZE_CLASSES: Record<ButtonSize, string> = {
  small: 'h-8 w-8',
  medium: 'h-10 w-10',
  large: 'h-12 w-12',
};

export const BUTTON_CIRCLE_ICON_SIZE: Record<ButtonSize, number> = {
  small: 14,
  medium: 18,
  large: 22,
};

export const VARIANT_BASE: Record<ButtonVariant, string> = {
  default:
    'bg-card-bg text-text font-medium border-border rounded-full border p-0 cursor-pointer transition-colors duration-150 hover:text-accent',
  primary:
    'bg-accent rounded-full font-semibold text-white cursor-pointer transition-opacity duration-200 hover:opacity-88',
  text: 'accent-tint-hover font-medium text-text hover:text-accent bg-transparent rounded-full cursor-pointer transition-[color,background-color,opacity] duration-200',
};

export const SIZE_CLASSES: Record<ButtonVariant, Record<ButtonSize, string>> = {
  default: BUTTON_CIRCLE_SIZE_CLASSES,
  primary: {
    small: 'px-4 py-1.5 text-xs',
    medium: 'px-6 py-2.5 text-sm',
    large: 'px-6 py-3.25 text-base',
  },
  text: {
    small: 'px-2 py-1 text-xs',
    medium: 'px-2.5 py-1.5 text-xs',
    large: 'px-3 py-1.5 text-sm',
  },
};

export const ICON_SIZE: Record<ButtonVariant, Record<ButtonSize, number>> = {
  default: BUTTON_CIRCLE_ICON_SIZE,
  primary: { small: 12, medium: 16, large: 18 },
  text: { small: 12, medium: 14, large: 16 },
};
