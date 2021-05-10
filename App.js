import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation'
// You can import from local files
import AssetExample from './components/AssetExample';
import BottomTabNav from './navigation';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
          <BottomTabNav/>
    </NavigationContainer>
  );
}

