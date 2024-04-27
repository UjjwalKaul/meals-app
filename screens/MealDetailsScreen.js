import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../models/components/MealDetail';
import Subtitle from '../models/components/MealDetail/Subtitle';
import List from '../models/components/MealDetail/List';
export default function MealDetailsScreen({ route, navigation }) {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  function headerButtonHandler() {
    console.log('Pressed');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me" onPress={headerButtonHandler} />;
      },
    });
  }, [navigation, headerButtonHandler]);
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
