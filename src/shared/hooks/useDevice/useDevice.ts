import { useCallback, useLayoutEffect, useState } from 'react';

import { DeviceType, mediaQueries } from './constants';

function addMediaQueryListener<K extends keyof MediaQueryListEventMap>(
  event: K,
  mediaQueryList: MediaQueryList,
  handler: ({ matches, media }: MediaQueryListEvent) => void
): void {
  mediaQueryList.addEventListener(event, handler);
}

function removeMediaQueryListener<K extends keyof MediaQueryListEventMap>(
  event: K,
  mediaQueryList: MediaQueryList,
  handler: ({ matches, media }: MediaQueryListEvent) => void
): void {
  mediaQueryList.removeEventListener(event, handler);
}

export function useDevice() {
  const [deviceType, setDeviceType] = useState<string>(DeviceType.MOBILE);

  const handleMatch = useCallback(({ matches, media }: MediaQueryListEvent | MediaQueryList): void => {
    if (!matches) {
      return;
    }
    const currentType = Object.keys(mediaQueries).find((key) => mediaQueries[key as DeviceType] === media);
    if (!currentType) {
      return;
    }
    setDeviceType(currentType);
  }, []);

  useLayoutEffect(() => {
    const mediaQueriesList: MediaQueryList[] = [];

    Object.values(mediaQueries).forEach((media) => {
      const mediaQueryList = window.matchMedia(media);
      // Get initial type
      handleMatch(mediaQueryList);

      // Add listeners
      addMediaQueryListener('change', mediaQueryList, handleMatch);

      // Populate the mediaQueriesList for the removal
      mediaQueriesList.push(mediaQueryList);
    });
    return (): void => {
      // Remove listeners
      mediaQueriesList.forEach((mediaQueryList) => {
        removeMediaQueryListener('change', mediaQueryList, handleMatch);
      });
    };
  }, []);
  const isMobile = deviceType === DeviceType.MOBILE;
  const isTablet = deviceType === DeviceType.TABLET;
  const isDesktop = deviceType === DeviceType.DESKTOP;

  return { deviceType: deviceType as DeviceType, isMobile, isTablet, isDesktop };
}
