import { useTranslation } from 'react-i18next';

import { Section } from '@/shared/ui';

import { CurrentExperienceCard } from './CurrentExperienceCard';
import { ExperienceItem } from './ExperienceItem';
import { useLocalizedExperience } from './useLocalizedExperience';

export function Experience() {
  const { t } = useTranslation();
  const entries = useLocalizedExperience();

  return (
    <Section
      id="experience"
      className="py-18"
      title={t('experience.heading')}
    >
      <div className="timeline-track">
        <div
          className="timeline-progress"
          aria-hidden="true"
        />
        {entries.map((entry) =>
          entry.current ? (
            <CurrentExperienceCard
              key={entry.id}
              entry={entry}
            />
          ) : (
            <ExperienceItem
              key={entry.id}
              entry={entry}
            />
          )
        )}
      </div>
    </Section>
  );
}
