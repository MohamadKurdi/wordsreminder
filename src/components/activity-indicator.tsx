import React from 'react';
import { ActivityIndicator as RNActivityIndicator, StyleSheet, ActivityIndicatorProps, ViewStyle } from 'react-native';
import { ThemeContext } from '@contexts/theme-context';

type Props = ActivityIndicatorProps & {
  children?: never;
};

export const ActivityIndicator = ({ size = 'small' }: Props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RNActivityIndicator
          color={theme.primary025}
          size={size}
          style={styles.activityIndicator}
          accessibilityHint="Loading"
        />
      )}
    </ThemeContext.Consumer>
  );
};

type Style = {
  activityIndicator: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  activityIndicator: {
    padding: 10,
  },
});
