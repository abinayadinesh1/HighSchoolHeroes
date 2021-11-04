import React from 'react';
import SingleInput from './singleTextInput.js'


import {
    Text,
    View,
    Button,
    StyleSheet,
  } from 'react-native';


function SignInWithGoogle({navigation}){
return(
    <View>
    <Text>Sign In With Google</Text>
    <Button title="Go back" onPress={() => navigation.popToTop()} /> 
    </View>
);
}
  

export default SignInWithGoogle;