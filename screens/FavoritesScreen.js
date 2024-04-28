import { useContext } from 'react';
import MealsList from '../models/components/MealsList';
import { FavoritesContext } from '../store/favorites-context';
import { MEALS } from '../data/dummy-data';
import { View, Text, StyleSheet } from 'react-native';

export default function FavoritesScreen() {
  const favMealctx = useContext(FavoritesContext);
  const favMeals = MEALS.filter((meal) => {
    return favMealctx.ids.includes(meal.id);
  });

  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
