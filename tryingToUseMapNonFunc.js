/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, {useState} from 'react'
 import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
 import { Dimensions } from 'react-native';
 const { height } = Dimensions.get('window');

 function MultipleInput(placeholderMessages){
   const email = useState('')
   handleEmail = (text) => {
      email(text)
   }
   login = (email) => {
      alert('email: ' + email)
   }
    return(
      <View style = {styles.container}>
         {placeholderMessages.map((item) => {
            return(
               console.log(item)
         );
         })}
         <Pressable style={styles.filledButton} onPress = {
               () => this.login(email()) //calling this func to send info to the login alert
            }>
         <Text style={{color: "white", textAlign: "center",justifyContent: 'space-evenly',fontSize: 20, marginTop:12.5, marginLeft:10}}>{'Send Email'}</Text>
         </Pressable>
      </View>
    );

 }
 const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#08ec34',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#08ec34',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    },
    filledButton:{
      color:'white',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#08ec34',
      height: 50,
      fontSize: 50,
      backgroundColor: "#08ec34",
      alignSelf:"stretch",
      marginHorizontal:10,
      bottom:-(0.06*height),
    }
 })

 export default MultipleInput; 
