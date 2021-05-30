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
import { BooksContextProvider } from './app/data/context/books/BooksContext';

const App = () => {

  return (
    <NavigationContainer>
      <BooksContextProvider>
        <Navigation />
      </BooksContextProvider>
    </NavigationContainer>
  );
};

export default App;
