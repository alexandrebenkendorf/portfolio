import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { ReadMoreButton, TagStack } from '@/shared/ui';

interface ExperienceReadMoreProps {
  bullets?: string[];
  tags: string[];
  isOpen: boolean;
  onToggle: () => void;
  readMoreColor?: 'default' | 'primary';
  tagClassName?: string;
  toggleClassName?: string;
}

export function ExperienceReadMore({
  bullets,
  tags,
  isOpen,
  onToggle,
  readMoreColor,
  tagClassName,
  toggleClassName,
}: ExperienceReadMoreProps) {
  const { t } = useTranslation();
  const hasBullets = Boolean(bullets?.length);

  return (
    <>
      {!!hasBullets && (
        <div className="flex flex-col gap-2">
          <ReadMoreButton
            isOpen={isOpen}
            onClick={onToggle}
            openLabel={t('experience.showLess')}
            closedLabel={t('experience.readMore')}
            className="read-more"
            color={readMoreColor}
          />
          <div className={clsx('expand-body', isOpen && 'is-open')}>
            <ul className="text-text-strong m-0 flex flex-col gap-3 pl-4.5 text-sm leading-[1.6]">
              {bullets?.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <TagStack
        tags={tags}
        tagClassName={tagClassName}
        toggleClassName={toggleClassName}
      />
    </>
  );
}
