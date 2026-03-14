import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { spacing, radius } from '@/constants/theme';
import { fontSize, fontWeight } from '@/constants/theme/typography';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonProps = PressableProps & {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth,
  children,
  style,
  textStyle,
  disabled,
  ...pressableProps
}: ButtonProps) {
  const { theme } = useTheme();

  const sizeStyles = {
    sm: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md },
    md: { paddingVertical: spacing.sm + 2, paddingHorizontal: spacing.lg },
    lg: { paddingVertical: spacing.md, paddingHorizontal: spacing.xl },
  };

  const variantStyles: Record<ButtonVariant, { bg: string; border?: string; text: string }> = {
    primary: { bg: theme.primary, text: '#FFFFFF' },
    secondary: { bg: theme.secondary, text: '#FFFFFF' },
    outline: { bg: 'transparent', border: theme.border, text: theme.text },
    ghost: { bg: 'transparent', text: theme.primary },
  };

  const v = variantStyles[variant];
  const sizeConfig = sizeStyles[size];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        sizeConfig,
        { backgroundColor: v.bg, borderWidth: v.border ? 1 : 0, borderColor: v.border },
        fullWidth && styles.fullWidth,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style as ViewStyle,
      ]}
      disabled={disabled}
      {...pressableProps}
    >
      <Text
        style={[
          styles.text,
          { color: v.text },
          size === 'sm' && { fontSize: fontSize.sm },
          size === 'lg' && { fontSize: fontSize.lg },
          textStyle as TextStyle,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semiBold,
  },
});
