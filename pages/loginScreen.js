import React, {useState} from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  ImageBackground,
  StyleSheet, 
  Dimensions
} from 'react-native';
import BlankSpacer from 'react-native-blank-spacer';
import backgroundImage from '../adp_background.png';
const { height } = Dimensions.get('window');
import {requestLogin} from '../src/utils.js';

function LogInScreen({navigation, setPage, setToken}) {
    console.log("to login screen")
    const [email, setEmail] = useState(''); // same as username
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);
  
    const register = text => {
      e.preventDefault();
    };
  
    const login = async (text) => {
        console.log("email and password from loginscreen")
        console.log(email, password)
      let response = await requestLogin(email, password);
      console.log(response);
      if (response && response.token) {
        console.log("response or token is available")
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
              onChange={text => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Password"
              placeholderTextColor="#08ec34"
              autoCapitalize="none"
              onChange={text => setPassword(text)}
            />
            <Button onPress={text => login(text)} title="Login" color="#000000" />
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

export default LogInScreen;