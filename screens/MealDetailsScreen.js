import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../models/components/MealDetail';
import Subtitle from '../models/components/MealDetail/Subtitle';
import List from '../models/components/MealDetail/List';
import IconButton from '../models/components/IconButton';
import { FavoritesContext } from '../store/favorites-context';
export default function MealDetailsScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFav = favoriteMealsCtx.ids.includes(mealId);
  const [btncolor, setBtnColor] = useState('white');

  function changeFavoritesHandler() {
    if (mealIsFav) {
      favoriteMealsCtx.removeFavorite(mealId);
      setBtnColor('white');
    } else {
      favoriteMealsCtx.addFavorite(mealId);
      setBtnColor('yellow');
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFav ? 'star' : 'star-outline'}
            color={btncolor}
            onPress={changeFavoritesHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoritesHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuter: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
