/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import BlankSpacer from "react-native-blank-spacer";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inputs from './doubleTextInput.js'
import ForgotPassword from './forgotPassword.js'
import NewAccount from './createAccount.js'
import SignInWithGoogle from './signInWithGoogle.js'

import {
  StyleSheet,
  Text,
  Button,
  View,
  ImageBackground,
} from 'react-native';

const image = { uri: "/Users/abi3/ADP/HSH/volunteer_app/adp_background.png" };

function LogInScreen({navigation}){
  
  return(
    <View>
    <BlankSpacer height={20}/>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
    <BlankSpacer height={40}/>
    <Text style = {styles.whiteTitle}>JANJ Activity Tracker</Text>
    <Text style = {styles.whiteTitle}>Sign In</Text>

    <View style = {styles.subContainer}>
    <Inputs />

    </View>
    <Button
      onPress={() => navigation.navigate('ForgotPassword')}
      title="Forgot Password"
      color="#019EF3"
    />
    <Button
      onPress={()=> navigation.navigate('NewAccount')}
      title="Create a New Account"
      color="#019EF3"
    />
      <Button
      onPress={()=> navigation.navigate('SignInWithGoogle')}
      title="Sign in With Google"
      color="#019EF3"
    />
  </View>
  );
}
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LogInScreen">
      <Stack.Screen name="Log In" component={LogInScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewAccount" component={NewAccount} />
      <Stack.Screen name="SignInWithGoogle" component={SignInWithGoogle} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: 'center',
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  leftTitle: {
    justifyContent: 'center',
    left: 10,
    color: "black",
    fontSize: 30,
    textAlign: "left",
  },
  centerTitle: {
    justifyContent: 'center',
    left: 10,
    color: "black",
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
  whiteTitle: {
    justifyContent: 'center',
    left: 10,
    color: "white",
    fontSize: 37,
    textAlign: "left",
    
  },
  subtitle: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "left",
  },
  subContainer:{
    margin: '12.5%',
    marginTop: '30%',
    width: '75%',
    height: '40%', 
    borderWidth:1, 
    borderColor: "grey"
  },
});

export default App;
