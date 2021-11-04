import React from 'react';
import SingleInput from './singleTextInput.js'


import {
    Text,
    View,
    StyleSheet,
    Button
  } from 'react-native';

function NewAccount({navigation}){
return(
    <View>
    <Text>Create a New Account</Text>
    <Button title="Go back" onPress={() => navigation.popToTop()} /> 
    </View>
);
}

export default NewAccount;