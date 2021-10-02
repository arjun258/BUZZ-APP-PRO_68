import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Fb from './screens/fb';
import In from './screens/in';

export default function App() {
  return (
    <AppContainer />
  );
}

const TabNavigator = createBottomTabNavigator({
  FaceBook: {screen:Fb},
  Instagram: {screen:In},
});

const AppContainer = createAppContainer(TabNavigator);