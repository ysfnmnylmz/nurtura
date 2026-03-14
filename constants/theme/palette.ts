/**
 * Color palette – semantic names for light and dark themes.
 */
export const palette = {
  light: {
    primary: '#2563EB',
    primaryMuted: '#DBEAFE',
    secondary: '#7C3AED',
    background: '#FFFFFF',
    backgroundMuted: '#F8FAFC',
    surface: '#F1F5F9',
    surfaceElevated: '#FFFFFF',
    text: '#0F172A',
    textMuted: '#64748B',
    border: '#E2E8F0',
    borderMuted: '#F1F5F9',
    success: '#059669',
    successMuted: '#D1FAE5',
    warning: '#D97706',
    warningMuted: '#FEF3C7',
    error: '#DC2626',
    errorMuted: '#FEE2E2',
    tint: '#2563EB',
    tabIconDefault: '#94A3B8',
    tabIconSelected: '#2563EB',
  },
  dark: {
    primary: '#3B82F6',
    primaryMuted: '#1E3A8A',
    secondary: '#8B5CF6',
    background: '#0F172A',
    backgroundMuted: '#1E293B',
    surface: '#1E293B',
    surfaceElevated: '#334155',
    text: '#F8FAFC',
    textMuted: '#94A3B8',
    border: '#334155',
    borderMuted: '#1E293B',
    success: '#10B981',
    successMuted: '#064E3B',
    warning: '#F59E0B',
    warningMuted: '#78350F',
    error: '#EF4444',
    errorMuted: '#7F1D1D',
    tint: '#3B82F6',
    tabIconDefault: '#64748B',
    tabIconSelected: '#3B82F6',
  },
} as const;

export type PaletteMode = keyof typeof palette;
export type Palette = (typeof palette)[PaletteMode];
