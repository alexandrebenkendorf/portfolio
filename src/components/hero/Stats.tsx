import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Stat } from './Stat';

function animateCount(el: HTMLElement) {
  const target = parseInt(el.dataset.target ?? '0', 10);
  const suffix = el.dataset.suffix ?? '';
  const duration = 1200;
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };
  requestAnimationFrame(tick);
}

export function Stats() {
  const { t } = useTranslation();
  const stats = [
    { id: 'years', target: 20, suffix: '+', label: t('stats.years') },
    { id: 'seniorYears', target: 8, suffix: '+', label: t('stats.seniorYears') },
    { id: 'continents', target: 3, suffix: '', label: t('stats.continents') },
  ];

  useEffect(() => {
    const statEls = Array.from(document.querySelectorAll<HTMLElement>('.stat-num'));

    if (!('IntersectionObserver' in window)) {
      statEls.forEach(animateCount);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    statEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-stretch gap-0">
      {stats.flatMap((stat, index) => {
        const block = (
          <Stat
            key={stat.id}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
          />
        );
        if (index === 0) {
          return [block];
        }
        return [
          <div
            key={`${stat.id}-divider`}
            className="bg-border-strong w-px"
          />,
          block,
        ];
      })}
    </div>
  );
}
