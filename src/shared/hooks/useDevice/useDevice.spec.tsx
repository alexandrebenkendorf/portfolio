import { act, render, screen } from '@testing-library/react';

import { DeviceType, mediaQueries } from './constants';
import { useDevice } from './useDevice';

describe('useDevice', () => {
  let map: Record<string, ({ matches, media }: MediaQueryListEvent) => void> = {};

  function TestComponent() {
    const { deviceType } = useDevice();
    return <h1>{deviceType}</h1>;
  }

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn((event, cb) => {
          map[event] = cb;
        }),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterAll(() => {
    map = {};
  });

  it('should use default when no media query is passed', () => {
    render(<TestComponent />);

    expect(screen.getByRole('heading')).toHaveTextContent(DeviceType.MOBILE);
  });

  it('should use desktop when desktop media query is passed', () => {
    render(<TestComponent />);

    act(() => {
      map.change({
        matches: true,
        media: mediaQueries.DESKTOP,
      } as MediaQueryListEvent);
    });

    expect(screen.getByRole('heading')).toHaveTextContent(DeviceType.DESKTOP);
  });

  it('should use tablet when tablet media query is passed', () => {
    render(<TestComponent />);
    act(() => {
      map.change({
        matches: true,
        media: mediaQueries.TABLET,
      } as MediaQueryListEvent);
    });
    expect(screen.getByRole('heading')).toHaveTextContent(DeviceType.TABLET);
  });

  it('should use mobile when mobile media query is passed', () => {
    render(<TestComponent />);
    act(() => {
      map.change({
        matches: true,
        media: '(max-width: 625px)',
      } as MediaQueryListEvent);
    });
    expect(screen.getByRole('heading')).toHaveTextContent(DeviceType.MOBILE);
  });

  it('should use default when any media query exits', () => {
    render(<TestComponent />);
    act(() => {
      map.change({
        matches: false,
        media: '(max-width: 625px)',
      } as MediaQueryListEvent);
      map.change({
        matches: false,
        media: '(min-width: 625px) and (max-width: 970px)',
      } as MediaQueryListEvent);
      map.change({
        matches: false,
        media: '(min-width: 971px)',
      } as MediaQueryListEvent);
    });
    expect(screen.getByRole('heading')).toHaveTextContent(DeviceType.MOBILE);
  });

  it('should use desktop when tablet media query exits later', () => {
    render(<TestComponent />);
    act(() => {
      map.change({
        matches: true,
        media: mediaQueries.DESKTOP,
      } as MediaQueryListEvent);
      map.change({
        matches: false,
        media: mediaQueries.TABLET,
      } as MediaQueryListEvent);
    });
    expect(screen.getByRole('heading')).toHaveTextContent(DeviceType.DESKTOP);
  });

  it('should use tablet when desktop media query exits later', () => {
    render(<TestComponent />);
    act(() => {
      map.change({
        matches: true,
        media: mediaQueries.TABLET,
      } as MediaQueryListEvent);
      map.change({
        matches: false,
        media: mediaQueries.DESKTOP,
      } as MediaQueryListEvent);
    });
    expect(screen.getByRole('heading')).toHaveTextContent(DeviceType.TABLET);
  });

  it('should use mobile when tablet media query exits later', () => {
    render(<TestComponent />);
    act(() => {
      map.change({
        matches: false,
        media: mediaQueries.DESKTOP,
      } as MediaQueryListEvent);
      map.change({
        matches: true,
        media: '(max-width: 625px)',
      } as MediaQueryListEvent);
    });
    expect(screen.getByRole('heading')).toHaveTextContent(DeviceType.MOBILE);
  });

  it('should use last query when many media query are passed', () => {
    render(<TestComponent />);
    act(() => {
      map.change({
        matches: true,
        media: mediaQueries.MOBILE,
      } as MediaQueryListEvent);
      map.change({
        matches: true,
        media: mediaQueries.TABLET,
      } as MediaQueryListEvent);
      map.change({
        matches: true,
        media: mediaQueries.DESKTOP,
      } as MediaQueryListEvent);
    });
    expect(screen.getByRole('heading')).toHaveTextContent(DeviceType.DESKTOP);
  });
});
