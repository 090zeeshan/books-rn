import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import MovieDetails from '../screens/bookDetails/BookDetails';
import WebViewScreen from '../screens/webview/WebViewScreen';
import ScreenNames from './ScreenNames';
import * as ScreenTitles from './ScreenTitles';
import Animated from 'react-native-reanimated';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import { PRIMARY_COLOR } from '../globals/Colors';

const Stack = createStackNavigator();

export default () => {

    const options = {
        headerStyle: { backgroundColor: PRIMARY_COLOR },
        headerTintColor: 'white',
    };

    return (
        <Stack.Navigator initialRouteName={ScreenNames.HOME}>
            <Stack.Screen name={ScreenNames.HOME} component={Home} options={{ ...options, title: ScreenTitles.HOME }} />
            <Stack.Screen name={ScreenNames.DETAILS} component={MovieDetails} options={{ ...options }} />
            <Stack.Screen name={ScreenNames.WEBVIEW} component={WebViewScreen} options={{ ...options }} />
        </Stack.Navigator>
    );
}