import { useEffect, useState } from 'react';

const SHOW_WITHIN_PX_OF_BOTTOM = 120;

export function useBackToTopVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const distanceFromBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
      setIsVisible(distanceFromBottom < SHOW_WITHIN_PX_OF_BOTTOM);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return isVisible;
}
