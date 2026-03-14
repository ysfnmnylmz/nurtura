import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { palette, type PaletteMode } from '@/constants/theme';

type Theme = typeof palette.light;

type ThemeContextValue = {
  theme: Theme;
  mode: PaletteMode;
  setMode: (mode: PaletteMode | 'system') => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [overrideMode, setOverrideMode] = useState<PaletteMode | 'system'>('system');

  const mode: PaletteMode = useMemo(() => {
    if (overrideMode === 'system') return systemScheme ?? 'light';
    return overrideMode;
  }, [overrideMode, systemScheme]);

  const theme = useMemo(() => palette[mode], [mode]);
  const isDark = mode === 'dark';

  const setMode = useCallback((next: PaletteMode | 'system') => {
    setOverrideMode(next);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, mode, setMode, isDark }),
    [theme, mode, setMode, isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
