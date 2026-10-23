import { useTranslation } from 'react-i18next';

import { Section, Tag } from '@/shared/ui';

import { skillCategories } from './skills.data';

export function Skills() {
  const { t } = useTranslation();

  return (
    <Section
      id="stack"
      className="border-border"
      title={t('skills.heading')}
    >
      <div className="grid grid-cols-2 gap-x-12 gap-y-9 max-[640px]:grid-cols-1">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col gap-2.5"
          >
            <h3
              className="text-slate-400 m-0 font-mono text-xs uppercase"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-offset="0"
            >
              {t(`skills.categories.${category.id}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.tags.map((tag, index) => (
                <span
                  key={tag}
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay={index * 50}
                  className="relative"
                >
                  <Tag
                    size="large"
                    hoverable
                  >
                    {tag}
                  </Tag>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
