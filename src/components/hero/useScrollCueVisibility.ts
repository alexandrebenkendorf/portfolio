import { useEffect, useState } from 'react';

const HIDE_AFTER_SCROLL_PX = 40;

export function useScrollCueVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY < HIDE_AFTER_SCROLL_PX);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return isVisible;
}
