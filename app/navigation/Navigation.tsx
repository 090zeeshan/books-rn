import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import MovieDetails from '../screens/bookDetails/BookDetails';
import ScreenNames from './ScreenNames';
import * as ScreenTitles from './ScreenTitles';

const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator initialRouteName={ScreenNames.HOME} >
            <Stack.Screen name={ScreenNames.HOME} component={Home} options={{ title: ScreenTitles.HOME }} ></Stack.Screen>
            <Stack.Screen name={ScreenNames.DETAILS} component={MovieDetails}></Stack.Screen>
        </Stack.Navigator>
    );
}