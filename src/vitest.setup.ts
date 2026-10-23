import '@testing-library/jest-dom/vitest';
import '@/shared/i18n';

// jsdom doesn't implement matchMedia — stub it so components reading
// prefers-color-scheme (e.g. useTheme) can render in tests.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// jsdom doesn't implement ResizeObserver — stub it so components that
// observe layout size (e.g. useTimelineProgress) can render in tests.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: ResizeObserverStub,
});
