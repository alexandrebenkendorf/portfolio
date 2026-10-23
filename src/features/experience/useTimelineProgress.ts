import { useEffect } from 'react';

/**
 * Fills `.timeline-progress` as the page scrolls, and marks each
 * `.timeline-item` as `.line-passed` once the fill has reached its dot —
 * so dots turn solid and rows pick up their accent styling in sync with the
 * line, not with generic scroll-reveal, and stay that way once passed.
 * The frontier dot — the one the line has most recently reached — also
 * gets `.current` for the bigger pulsing "now" dot.
 */
export function useTimelineProgress() {
  useEffect(() => {
    const track = document.querySelector<HTMLElement>('.timeline-track');
    const progressFill = document.querySelector<HTMLElement>('.timeline-progress');
    const dots = Array.from(document.querySelectorAll<HTMLElement>('.tl-dot'));
    if (!track || !progressFill) {
      return;
    }

    const updateProgress = () => {
      const rect = track.getBoundingClientRect();

      // Map scroll position to fill progress so the line reaches exactly
      // 100% once the track's own bottom edge has been scrolled past,
      // rather than snapping there once a fixed viewport-fraction reference
      // is passed. Keyed to the track itself, not the document's scroll
      // range, so content below the timeline doesn't throw it off — but
      // capped at the page's actual max scroll too, in case there isn't
      // enough content below the track for that viewport-fraction reference
      // to ever be reached (which, on a page that ends shortly after the
      // timeline, never naturally hits 100% and used to jump instead of
      // filling smoothly).
      const trackTop = rect.top + window.scrollY;
      const trackBottom = trackTop + rect.height;
      const startScrollY = trackTop - window.innerHeight * 0.6;
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
      const endScrollY = Math.min(trackBottom - window.innerHeight * 0.4, maxScrollY);
      const scrollRange = Math.max(endScrollY - startScrollY, 1);
      const progress = Math.min(Math.max((window.scrollY - startScrollY) / scrollRange, 0), 1);

      const fillHeight = progress * rect.height;
      progressFill.style.height = `${fillHeight}px`;

      let frontierDot: HTMLElement | null = null;
      dots.forEach((dot) => {
        const dotCenter = dot.getBoundingClientRect().top - rect.top + dot.offsetHeight / 2;
        const row = dot.closest('.timeline-item');
        const isPassed = fillHeight >= dotCenter;
        row?.classList.toggle('line-passed', isPassed);
        if (isPassed) frontierDot = dot;
      });

      dots.forEach((dot) => {
        dot.classList.toggle('current', dot === frontierDot);
      });
    };

    // Coalesce rapid scroll/resize bursts into at most one layout
    // read+write per animation frame.
    let animationFrame = 0;
    const onScroll = () => {
      if (animationFrame) return;
      animationFrame = requestAnimationFrame(() => {
        animationFrame = 0;
        updateProgress();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Expanding/collapsing a card's "read more" body resizes the track
    // via a CSS animation without firing scroll or resize, which left the
    // fill height stale and the line visibly short of its dot. A
    // ResizeObserver keeps it in sync as that animation runs.
    const resizeObserver = new ResizeObserver(onScroll);
    resizeObserver.observe(track);

    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);
}
