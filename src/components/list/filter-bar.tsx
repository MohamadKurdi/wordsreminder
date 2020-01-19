import React from 'react';
import { StyleSheet, View, TextInput, ViewStyle, TextStyle } from 'react-native';
import { Spacer } from '@components/spacer';
import { FilterCloseButton } from '@components/filter-close-button';
import { ThemeContext } from '@contexts/theme-context';

type Props = {
  onCloseFilterPress: () => void;
  onFilterChange: (filter: string) => void;
};

export const FilterBar = ({ onCloseFilterPress, onFilterChange }: Props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <View
          style={{
            borderBottomColor: theme.primary025,
            borderBottomWidth: 1,
          }}
        >
          <Spacer marginLeft={20} marginRight={20}>
            <View style={[styles.filterBar]}>
              <Spacer marginRight={20}>
                <FilterCloseButton onPress={onCloseFilterPress} />
              </Spacer>
              <TextInput
                onChangeText={onFilterChange}
                autoFocus={true}
                placeholder="Search"
                selectionColor={theme.primary025}
                placeholderTextColor={theme.primary050}
                autoCorrect={false}
                style={[
                  styles.filterInput,
                  {
                    borderColor: theme.primary025,
                    color: theme.primary025,
                  },
                ]}
              />
            </View>
          </Spacer>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

type Style = {
  filterBar: ViewStyle;
  filterInput: TextStyle;
};

const styles = StyleSheet.create<Style>({
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  filterInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 20,
  },
});
