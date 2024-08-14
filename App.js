import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/pages/Home';
import DetailsScreen from './src/pages/Details';
import ProfileScreen from './src/pages/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
