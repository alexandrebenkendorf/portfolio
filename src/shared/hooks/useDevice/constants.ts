export enum Breakpoint {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}
export const breakpointSizes: Record<Breakpoint, number> = {
  [Breakpoint.XS]: 0,
  [Breakpoint.SM]: 640,
  [Breakpoint.MD]: 768,
  [Breakpoint.LG]: 1024,
  [Breakpoint.XL]: 1280,
  [Breakpoint.XXL]: 1536,
};
export enum DeviceType {
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP',
}

export const breakpoints: Record<DeviceType, number> = {
  [DeviceType.MOBILE]: breakpointSizes.xs,
  [DeviceType.TABLET]: breakpointSizes.sm,
  [DeviceType.DESKTOP]: breakpointSizes.lg,
};

export const mediaQueries = {
  MOBILE: `(max-width: ${breakpoints.TABLET - 1}px)`,
  TABLET: `(min-width: ${breakpoints.TABLET}px) and (max-width: ${breakpoints.DESKTOP - 1}px)`,
  DESKTOP: `(min-width: ${breakpoints.DESKTOP}px)`,
};
