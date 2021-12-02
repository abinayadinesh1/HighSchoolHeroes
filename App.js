/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassword from './pages/forgotPassword.js';
import NewAccount from './pages/createAccount.js';
import SignInWithGoogle from './pages/signInWithGoogle.js';
import LogInScreen from './pages/loginScreen.js';

const image = { uri: 'adp_background.png' };

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
        <Stack.Screen name="SignInWithGoogle" component={SignInWithGoogle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
