import { View, Text } from 'react-native';
import React from 'react';

export default function MealDetailsScreen({ route }) {
  const { mealId } = route.params;
  return (
    <View>
      <Text>This is a meal details screen {mealId}</Text>
    </View>
  );
}
