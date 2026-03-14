/**
 * Design tokens – single source of truth for spacing, radius, shadows.
 */
export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const iconSize = {
  sm: 16,
  md: 24,
  lg: 32,
} as const;

export const designTokens = {
  spacing,
  radius,
  iconSize,
} as const;

export type Spacing = keyof typeof spacing;
export type Radius = keyof typeof radius;
export type IconSize = keyof typeof iconSize;
