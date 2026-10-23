import { useState } from 'react';

import { ExperienceReadMore } from './ExperienceReadMore';
import type { ExperienceEntry } from './experience.data';

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="exp-row timeline-item p-6"
      data-aos="fade-up"
      data-aos-offset="0"
    >
      <span
        className="tl-dot"
        aria-hidden="true"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <span className="exp-date text-slate-400 font-mono text-xs">{entry.dateRange}</span>
        <div className="flex flex-col gap-1">
          <div className="exp-role text-slate-400 text-[19px] font-bold">{entry.title}</div>
          <div className="exp-company text-slate-400 text-sm font-semibold">
            {entry.company} <span className="text-slate-400 font-medium">{entry.companyMeta}</span>
          </div>
        </div>
        <div className="text-text-faint text-sm">{entry.description}</div>

        <ExperienceReadMore
          bullets={entry.bullets}
          tags={entry.tags}
          isOpen={isOpen}
          onToggle={() => setIsOpen((open) => !open)}
          tagClassName="exp-tag"
          toggleClassName="exp-tag"
        />
      </div>
    </div>
  );
}
