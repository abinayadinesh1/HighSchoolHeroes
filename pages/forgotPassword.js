import React from 'react';
import SingleInput from './classes/singleTextInput.js'


import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';

const ForgotPassword = ({navigation}) => {
    return(
      <View>
        {/* <Button style={{justifyContent: "left"}} title="<-" onPress={() => navigation.popToTop()} />  ended up being uneeded*/} 
        <Text style={styles.centerTitle}>Forgot Your Password?</Text>
        <View style = {styles.subContainer}>
          <Text style={{textAlign:'center', fontSize:15, margin: 10}}>Enter the email address that is associated with your account on file. Further password recovery info willl be sent to that email address. </Text>
          <Text style={{fontSize:25, marginLeft:10,}}>Email Address</Text>
          <SingleInput />
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    centerTitle: {
      justifyContent: 'center',
      left: 10,
      color: "black",
      fontSize: 30,
      textAlign: "center",
      marginTop: 30,
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

export default ForgotPassword;