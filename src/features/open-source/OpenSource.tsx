import { useTranslation } from 'react-i18next';
import { IoOpenOutline } from 'react-icons/io5';

import { Section, TagStack } from '@/shared/ui';

import { openSourceProjects } from './openSource.data';

export function OpenSource() {
  const { t } = useTranslation();

  return (
    <Section
      id="open-source"
      className="pb-8"
      title={t('openSource.heading')}
    >
      <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
        {openSourceProjects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay={index * 100}
          >
            <div className="border-border bg-card-bg hover:border-accent flex h-full flex-col gap-4 rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_28px_-20px_rgba(0,0,0,0.25)]">
              <project.icon
                size={24}
                className="text-accent-text"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-4 grow">
                <div className="flex flex-col gap-2">
                  <h3 className="text-text m-0 font-bold">{t(`openSourceProjects.${project.id}.title`)}</h3>
                  <p className="text-slate-500 m-0 text-sm leading-[1.6]">
                    {t(`openSourceProjects.${project.id}.description`)}
                  </p>
                </div>

                <TagStack tags={project.tags} />
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-text mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold hover:underline"
              >
                {t('openSource.viewOnGithub')}
                <IoOpenOutline
                  size={14}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
