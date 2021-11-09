/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

class SingleInput extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    school: '',
    gradeLevel: '',
    address: '',
  };
  login = email => {
    alert('email: ' + email);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> First Name </Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Jane"
          placeholderTextColor="#08ec34"
          autoCapitalize="none"
        />
        <Text> Last Name </Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Doe"
          placeholderTextColor="#08ec34"
          autoCapitalize="none"
        />
        <Text> Email Address </Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="janedoe1@gmail.com"
          placeholderTextColor="#08ec34"
          autoCapitalize="none"
        />
        <Text> Birthday </Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="06/30/2005"
          placeholderTextColor="#08ec34"
          autoCapitalize="none"
        />
        <Text> Grade Level </Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="10"
          placeholderTextColor="#08ec34"
          autoCapitalize="none"
        />
        <Text> Full Address </Text>
        <Text> include apartment, building number, etc. </Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="1000 Cherry Apple Lane, Edison, NJ, 08902, USA"
          placeholderTextColor="#08ec34"
          autoCapitalize="none"
        />
        <Pressable
          style={styles.filledButton}
          onPress={
            () => this.login(this.email) //calling this func to send info to the login alert
          }>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              justifyContent: 'space-evenly',
              fontSize: 20,
              marginTop: 12.5,
              marginLeft: 10,
            }}>
            {'Send Email'}
          </Text>
        </Pressable>
      </View>
    );
  }
}
export default SingleInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#08ec34',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#08ec34',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
  filledButton: {
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#08ec34',
    height: 50,
    fontSize: 50,
    backgroundColor: '#08ec34',
    alignSelf: 'stretch',
    marginHorizontal: 10,
    bottom: -(0.06 * height),
  },
});
