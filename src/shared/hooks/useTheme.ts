import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // localStorage unavailable (private browsing, etc.) — fall through to system preference
  }
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return systemPrefersDark ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore write failures
    }

    let favicon = document.getElementById('favicon-theme') as HTMLLinkElement | null;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.id = 'favicon-theme';
      favicon.rel = 'icon';
      document.head.append(favicon);
    }
    favicon.href = theme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
