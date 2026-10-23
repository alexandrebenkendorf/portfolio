import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { ButtonSize } from '@/shared/ui/buttons/Button';
import { Tag } from '@/shared/ui/Tag/Tag';
import { TAG_CLASSNAME } from '@/shared/ui/Tag/constants';
import { Tooltip } from '@/shared/ui/Tooltip';

const VISIBLE_COUNT = 5;

export function TagStack({
  tags,
  size = 'small',
  tagClassName,
  toggleClassName,
}: {
  tags: string[];
  size?: ButtonSize;
  tagClassName?: string;
  toggleClassName?: string;
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  if (tags.length === 0) {
    return null;
  }

  const visible = tags.slice(0, VISIBLE_COUNT);
  const hidden = tags.slice(VISIBLE_COUNT);
  const toggleLabel = isOpen ? t('tagStack.showFewerTags') : t('tagStack.showMoreTags', { count: hidden.length });

  return (
    <div className="flex flex-wrap items-center gap-2">
      {visible.map((tag) => (
        <Tag
          key={tag}
          size={size}
          className={tagClassName}
        >
          {tag}
        </Tag>
      ))}
      {!!hidden.length && (
        <Tooltip label={toggleLabel}>
          <button
            type="button"
            className={clsx(
              TAG_CLASSNAME[size],
              'cursor-pointer transition-colors duration-150 hover:text-accent',
              toggleClassName
            )}
            onClick={() => setIsOpen((open) => !open)}
            aria-label={toggleLabel}
            aria-expanded={isOpen}
          >
            {isOpen ? '−' : `+${hidden.length}`}
          </button>
        </Tooltip>
      )}
      {!!isOpen &&
        hidden.map((tag, index) => (
          <Tag
            key={tag}
            size={size}
            className={clsx(tagClassName, 'tag-pop')}
            style={{ animationDelay: `${index * 30}ms` }}
          >
            {tag}
          </Tag>
        ))}
    </div>
  );
}
