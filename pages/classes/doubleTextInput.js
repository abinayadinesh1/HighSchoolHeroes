/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { Component } from 'react'
 import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
 import { Dimensions } from 'react-native';
 const { height } = Dimensions.get('window');

 class Inputs extends Component {
    state = {
       username: '',
       password: ''
    }
    handleUsername = (text) => {
       this.setState({ username: text })
    }
    handlePassword = (text) => {
       this.setState({ password: text })
    }
    login = (username, password) => {
       alert('username: ' + username + ' password: ' + password)
    }
    render() {
       return (
          <View style = {styles.container}>
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Username"
                placeholderTextColor = "#08ec34"
                autoCapitalize = "none"
                onChange={(e) => setEmail(e.target.value)}
                onChangeText = {this.handleUsername}/>
             
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#08ec34"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>

             <Pressable style={styles.filledButton} onPress = {
                   () => this.login(this.state.username, this.state.password) //calling this func to send info to the login alert
                }>
            <Text style={{color: "white", textAlign: "center", fontSize: 20, justifyContent: 'space-evenly', marginTop:12.5}}>{'Log In'}</Text>
            </Pressable>
          </View>
       )
    }
 }
 export default Inputs
 
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