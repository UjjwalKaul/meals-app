import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;
  return (
    <View style={styles.container}>
      <Text>This is the meals screen-{categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
