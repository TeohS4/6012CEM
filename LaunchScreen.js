import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


const logo = require('./assets/book_animate.gif')

export default function LaunchScreen({navigation}) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        <Text style={styles.line}>Welcome To{'\n'}</Text>
        <Text style={styles.line}>The{'\n'}</Text>
        <Text style={styles.line}>BookShelf</Text>
      </Text>

      <Image source={logo} style={styles.logo}></Image>
      
      <Text style={styles.text}>Award Winning Books</Text>

      <p style={styles.paragraph}>Choose from our wide selection of
        books to add it to your collection!</p>

      <Pressable style={styles.btn} onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.btnText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 16,
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  logo: {
    width: 220,
    height: 200,
    resizeMode: 'stretch',
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#00aaff',
    borderRadius: 15,
    padding: 10,
    width: 160,
    alignItems: 'center',
  },
  btnText: {
    color: 'white'
  },
  paragraph: {
    width: 220,
    textAlign: 'center',
    opacity: 0.7,
    fontFamily: 'Arial',
  },

});
