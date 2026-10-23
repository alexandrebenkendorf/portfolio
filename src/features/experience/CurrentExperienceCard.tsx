import { useState } from 'react';

import { ExperienceReadMore } from './ExperienceReadMore';
import type { ExperienceEntry } from './experience.data';

export function CurrentExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="exp-row timeline-item current bridge-gap pb-7"
      data-aos="fade-up"
      data-aos-offset="0"
    >
      <span
        className="tl-dot current"
        aria-hidden="true"
      />
      <div className="rounded-2xl border border-[rgba(79,70,229,0.3)] bg-[rgba(79,70,229,0.045)] px-6 py-5.5 shadow-[0_16px_28px_-20px_rgba(79,70,229,0.28),0_4px_10px_-8px_rgba(79,70,229,0.12)]">
        <div className="flex min-w-0 flex-1 flex-col gap-3.5">
          <span className="text-accent-text font-mono text-xs font-semibold">{entry.dateRange}</span>
          <div className="flex flex-col gap-1">
            <div className="text-text text-[19px] font-bold">{entry.title}</div>
            <div className="text-accent-text text-sm font-semibold">
              {entry.company} <span className="text-slate-400 font-medium">{entry.companyMeta}</span>
            </div>
          </div>
          <div className="text-slate-500 text-sm">{entry.description}</div>

          <ExperienceReadMore
            bullets={entry.bullets}
            tags={entry.tags}
            isOpen={isOpen}
            onToggle={() => setIsOpen((open) => !open)}
            readMoreColor="primary"
          />
        </div>
      </div>
    </div>
  );
}
