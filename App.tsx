/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import Navigation from './app/navigation/Navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/screens/home/Home';

const App = () => {

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
