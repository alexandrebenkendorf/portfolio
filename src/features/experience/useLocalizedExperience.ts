import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { experience, type ExperienceEntry } from './experience.data';

export function useLocalizedExperience(): ExperienceEntry[] {
  const { t, i18n } = useTranslation();

  return useMemo(
    () =>
      experience.map((entry) => ({
        ...entry,
        dateRange: t(`experienceEntries.${entry.id}.dateRange`),
        title: t(`experienceEntries.${entry.id}.title`),
        company: t(`experienceEntries.${entry.id}.company`, { defaultValue: entry.company }),
        companyMeta: t(`experienceEntries.${entry.id}.companyMeta`),
        description: t(`experienceEntries.${entry.id}.description`),
        bullets: entry.bullets
          ? (t(`experienceEntries.${entry.id}.bullets`, {
              returnObjects: true,
              defaultValue: entry.bullets,
            }) as string[])
          : undefined,
      })),
    [t, i18n.language]
  );
}
