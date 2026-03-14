import { Platform } from 'react-native';

/**
 * Typography system – font families, sizes, line heights, weights.
 */
export const fontFamily = {
  regular: Platform.select({ web: 'System', default: 'System' }),
  medium: Platform.select({ web: 'System', default: 'System' }),
  semiBold: Platform.select({ web: 'System', default: 'System' }),
  bold: Platform.select({ web: 'System', default: 'System' }),
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
} as const;

export const lineHeight = {
  tight: 1.2,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
} as const;

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
};

export const typography = {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
} as const;

export type FontSize = keyof typeof fontSize;
export type LineHeight = keyof typeof lineHeight;
export type FontWeight = keyof typeof fontWeight;
