import type { ButtonSize } from '@/shared/ui/buttons/Button';

// The default-button chip style (white bg, soft border, black text) shared by
// the experience tags, the experience tag-stack expand/collapse toggle, and
// the skills tags.
export const TAG_CLASSNAME: Record<ButtonSize, string> = {
  small:
    'bg-card-bg text-text border-border inline-flex items-center justify-center rounded-full border px-2.5 py-1.25 font-mono text-xs',
  medium:
    'bg-card-bg text-text border-border inline-flex items-center justify-center rounded-full border px-3 py-1.5 font-mono text-xs',
  large:
    'bg-card-bg text-text border-border inline-flex items-center justify-center rounded-full border px-3.5 py-2 font-mono text-sm',
};

// Lifts, fills with accent, and turns the text white on hover. Opt in per tag
// via `clsx(TAG_CLASSNAME[size], hoverable && TAG_HOVERABLE_CLASSNAME)`.
export const TAG_HOVERABLE_CLASSNAME = 'tag-hoverable';
