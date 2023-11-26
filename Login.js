import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const backgroundImage = require('./assets/background.jpg');

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginToast = () => {
    // Show a toast message when the button is pressed
    Toast.show({
      text1: 'Login Successful',
      type: 'success',
      visibilityTime: 800,
    });
  };

  return (

    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

      <View style={styles.container}>

        <Text style={styles.title}>{'\n'}{'\n'}The</Text>
        <Text style={styles.title}>Bookshelf</Text>

        <View style={styles.card}>
          {/* Content inside the rounded card */}
          <Text style={styles.signup}>Sign In</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Text style={styles.span}>Do not have an account?</Text>
          <Text style={styles.signin} onPress={() => navigation.navigate('Signup')}>Create An Account</Text>

          <Text style={styles.admin} onPress={() => navigation.navigate('AdminLogin')}>Login to Admin</Text>

          <Pressable style={styles.btn} onPress={() => navigation.navigate('Navigation')}>
            <Text style={styles.btnText}>Login</Text>
          </Pressable>
          
        </View>

        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: '80%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    minHeight: 370,
    justifyContent: 'center',
    marginTop: 90,
  },
  title: {
    fontSize: 28,
    color: 'white',
  },
  signup: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  signin: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 18,
  },
  admin: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
  },
  span: {
    opacity: '60%',
    fontWeight: 'italic',
    textAlign: 'center',
    fontSize: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
  input: {
    color: 'black',
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  btn: {
    marginTop: 16,
    backgroundColor: '#00aaff',
    borderRadius: 15,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: 'white'
  },
});
