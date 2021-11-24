/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text,TextInput, Button, View, ImageBackground} from 'react-native';
import BlankSpacer from 'react-native-blank-spacer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inputs from './pages/classes/doubleTextInput.js';
import ForgotPassword from './pages/forgotPassword.js';
import NewAccount from './pages/createAccount.js';
import SignInWithGoogle from './pages/signInWithGoogle.js';
import backgroundImage from './adp_background.png';
import {requestLogin} from './src/utils.js';


// const image = { uri: 'adp_background.png' };

function LogInScreen({navigation, setPage, setToken}) {
  const [email, setEmail] = useState(''); // same as username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const register = e => {
  //   e.preventDefault();
  //   // setPage('register');
  // };

  const login = async (e) => {
    setLoading(true);
    let response = await requestLogin(email, password);
    setLoading(false);
    console.log(response);
    if (response && response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('email', email);
      setError('');
      setPage('dashboard');
      setToken(localStorage.getItem('token'));
    } else if (response && response.username) {
      setError(response.username);
    } else if (response && response.password) {
      setError(response.password);
    } else if (response && response.non_field_errors) {
      setError(response.non_field_errors);
    }
  };

  return (
    <View>
      <BlankSpacer height={20} />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
      <BlankSpacer height={40} />
      <Text style={styles.whiteTitle}>JANJ Activity Tracker</Text>
      <Text style={styles.whiteTitle}>Sign In</Text>

      <View style={styles.subContainer}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Username"
            placeholderTextColor="#08ec34"
            autoCapitalize="none"
            onChange={e => setEmail(e.target.value)}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#08ec34"
            autoCapitalize="none"
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            onPress={(e)=>login(e)}
            title="Login"
            color="#000000"
          />
          {/* <Pressable
            style={styles.filledButton}
            onPress={
              () => this.login(this.state.username, this.state.password) //calling this func to send info to the login alert
            }>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
                justifyContent: 'space-evenly',
                marginTop: 12.5,
              }}>
              {'Log In'}
            </Text>
          </Pressable> */}
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate('ForgotPassword')}
        title="Forgot Password"
        color="#019EF3"
      />
      <Button
        onPress={() => navigation.navigate('NewAccount')}
        title="Create a New Account"
        color="#019EF3"
      />
      <Button
        onPress={() => navigation.navigate('SignInWithGoogle')}
        title="Sign in With Google"
        color="#019EF3"
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
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
    justifyContent: 'flex-start',
    alignSelf: 'center',
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  leftTitle: {
    justifyContent: 'center',
    left: 10,
    color: 'black',
    fontSize: 30,
    textAlign: 'left',
  },
  centerTitle: {
    justifyContent: 'center',
    left: 10,
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
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
  },
  whiteTitle: {
    justifyContent: 'center',
    left: 10,
    color: 'white',
    fontSize: 37,
    textAlign: 'left',
  },
  subtitle: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subContainer: {
    margin: '12.5%',
    marginTop: '30%',
    width: '75%',
    height: '40%',
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default App;
