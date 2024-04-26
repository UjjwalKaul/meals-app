import { View, FlatList, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealItem from '../models/components/MealItem';

export default function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
