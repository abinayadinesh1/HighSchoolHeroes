import React from 'react';
import MultipleInput from './multipleTextInput'


import {
    Text,
    View,
    Button
  } from 'react-native';

  const NewAccount = ({navigation}) => {
    return(
      <View>
        <MultipleInput />
          {/* MultipleInput(['first name', 'last name', 'email', 'address']), */}
      <Text>Create a New Account</Text>
      <Button title="Go back" onPress={() => navigation.popToTop()} /> 
      </View>
  );
    }
export default NewAccount;