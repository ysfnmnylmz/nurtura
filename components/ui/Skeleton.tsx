import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { radius, spacing } from '@/constants/theme';

export type SkeletonProps = ViewProps & {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: ViewStyle;
};

export function Skeleton({
  width = '100%',
  height = 20,
  borderRadius,
  style,
  ...viewProps
}: SkeletonProps) {
  const { theme } = useTheme();
  const opacity = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.8,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.base,
        {
          width,
          height,
          borderRadius: borderRadius ?? radius.md,
          backgroundColor: theme.borderMuted,
          opacity,
        },
        style as ViewStyle,
      ]}
      {...viewProps}
    />
  );
}

/** Composite skeleton for a typical list item (avatar + lines) */
export function SkeletonListItem() {
  const { theme } = useTheme();
  return (
    <View style={[styles.row, { borderBottomColor: theme.border }]}>
      <Skeleton width={48} height={48} borderRadius={radius.full} />
      <View style={styles.rowText}>
        <Skeleton width="80%" height={16} style={{ marginBottom: spacing.sm }} />
        <Skeleton width="50%" height={12} />
      </View>
    </View>
  );
}

/** Composite skeleton for a card with title and body lines */
export function SkeletonCard({ lines = 3 }: { lines?: number }) {
  return (
    <View style={styles.card}>
      <Skeleton width="60%" height={18} style={{ marginBottom: spacing.md }} />
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          width={i === lines - 1 ? '70%' : '100%'}
          height={14}
          style={{ marginBottom: i < lines - 1 ? spacing.sm : 0 }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
  },
  rowText: {
    flex: 1,
    marginLeft: spacing.md,
  },
  card: {
    padding: spacing.lg,
  },
});
