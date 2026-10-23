import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function useScrollReveal(language: string) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      disable: prefersReducedMotion,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [language]);
}
