import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#351401',
          },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#3f2f25' },
        }}>
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: 'All Categories' }}
        />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}>
          <Stack.Screen
            name="All Categories"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
