import React from 'react';
import { StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { spacing, radius } from '@/constants/theme';

export type CardProps = ViewProps & {
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: keyof typeof spacing;
  style?: ViewStyle;
};

export function Card({
  variant = 'elevated',
  padding = 'md',
  style,
  children,
  ...viewProps
}: CardProps) {
  const { theme } = useTheme();
  const paddingValue = spacing[padding];

  const variantStyle = {
    elevated: {
      backgroundColor: theme.surfaceElevated,
      borderWidth: 0,
      shadowColor: theme.text,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 2,
    },
    outlined: {
      backgroundColor: theme.surface,
      borderWidth: 1,
      borderColor: theme.border,
    },
    filled: {
      backgroundColor: theme.surface,
      borderWidth: 0,
    },
  }[variant];

  return (
    <View
      style={[
        styles.base,
        { padding: paddingValue },
        variantStyle,
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
  },
});
