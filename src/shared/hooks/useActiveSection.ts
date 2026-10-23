import { useEffect, useState } from 'react';

const SECTION_IDS = ['stack', 'experience', 'open-source'] as const;

export type SectionId = (typeof SECTION_IDS)[number];

// A section becomes active once its top crosses this line — partway down the
// viewport rather than right below the topbar, so a section's own bottom
// padding (empty space before the next section starts) never gets mistaken
// for "still showing the previous section".
const ACTIVATION_LINE_RATIO = 0.35;

export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (section): section is HTMLElement => section !== null
    );
    if (sections.length === 0) {
      return;
    }

    const onScroll = () => {
      const activationLine = window.innerHeight * ACTIVATION_LINE_RATIO;
      let current: SectionId | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          current = section.id as SectionId;
        }
      }

      // The last section may be too short for its top to ever cross the
      // activation line once the page can't scroll any further — fall back
      // to it once the bottom of the page is reached.
      const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
      if (isAtBottom) {
        current = sections[sections.length - 1].id as SectionId;
      }

      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return active;
}
