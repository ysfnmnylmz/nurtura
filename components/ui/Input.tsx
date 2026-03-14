import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { spacing, radius } from '@/constants/theme';
import { fontSize } from '@/constants/theme/typography';

export type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  hint?: string;
  containerStyle?: ViewStyle;
};

export function Input({
  label,
  error,
  hint,
  containerStyle,
  style,
  editable = true,
  ...textInputProps
}: InputProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      ) : null}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.surface,
            borderColor: error ? theme.error : theme.border,
            color: theme.text,
            paddingVertical: spacing.sm + 2,
            paddingHorizontal: spacing.md,
          },
          !editable && { opacity: 0.7 },
          style as ViewStyle,
        ]}
        placeholderTextColor={theme.textMuted}
        editable={editable}
        {...textInputProps}
      />
      {error ? (
        <Text style={[styles.helper, { color: theme.error }]}>{error}</Text>
      ) : hint ? (
        <Text style={[styles.helper, { color: theme.textMuted }]}>{hint}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: '500',
    marginBottom: spacing.xs,
  },
  input: {
    fontSize: fontSize.md,
    borderRadius: radius.md,
    borderWidth: 1,
  },
  helper: {
    fontSize: fontSize.xs,
    marginTop: spacing.xs,
  },
});
