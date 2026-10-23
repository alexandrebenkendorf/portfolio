import { useEffect } from 'react';

/** 3D tilt + mouse-tracked spotlight on hover, and a slow scroll parallax, for the hero's floating cards. */
export function useFloatCardEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.float-card'));
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const spotlight = card.querySelector<HTMLElement>('.spotlight');
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const pointerXPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const pointerYPercent = ((e.clientY - rect.top) / rect.height) * 100;
        const rotateXDeg = (0.5 - pointerYPercent / 100) * 16;
        const rotateYDeg = (pointerXPercent / 100 - 0.5) * 16;
        card.style.transform = `perspective(700px) rotateX(${rotateXDeg}deg) rotateY(${rotateYDeg}deg) scale3d(1.05, 1.05, 1.05) translateY(-6px)`;
        spotlight?.style.setProperty('--mx', `${pointerXPercent}%`);
        spotlight?.style.setProperty('--my', `${pointerYPercent}%`);
      };
      const onLeave = () => {
        card.style.transform = '';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    });

    const designLayer = document.querySelector<HTMLElement>('.parallax-design');
    const developLayer = document.querySelector<HTMLElement>('.parallax-develop');
    if (designLayer && developLayer) {
      const onScroll = () => {
        const y = window.scrollY || 0;
        designLayer.style.transform = `translateY(${y * 0.06}px)`;
        developLayer.style.transform = `translateY(${y * -0.1}px)`;
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);
}
