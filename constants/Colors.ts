import { palette } from '@/constants/theme';

/** @deprecated Prefer theme from useTheme() or palette from constants/theme */
export default {
  light: {
    text: palette.light.text,
    background: palette.light.background,
    tint: palette.light.tint,
    tabIconDefault: palette.light.tabIconDefault,
    tabIconSelected: palette.light.tabIconSelected,
  },
  dark: {
    text: palette.dark.text,
    background: palette.dark.background,
    tint: palette.dark.tint,
    tabIconDefault: palette.dark.tabIconDefault,
    tabIconSelected: palette.dark.tabIconSelected,
  },
};
