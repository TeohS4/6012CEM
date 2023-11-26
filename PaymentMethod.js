import React, { useState } from 'react';
import { Pressable, Image, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import { CheckBox } from 'react-native-elements';

export default function PaymentMethod({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const deleteCard = () => {
    Toast.show({
      type: 'error',
      text1: 'Card Deleted',
      position: 'top',
      visibilityTime: 1000,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cards</Text>
      <View style={styles.card}>
        <View style={styles.cardDetails}>
          <View>
            <Text style={styles.cardNumber}>**** **** **** 8025</Text>
            <Text style={styles.cardName}>Teoh Wei Jie</Text>
            <Text style={styles.cardExpiry}>Expiry: 12/25</Text>
            <Pressable style={styles.deleteButton} onPress={deleteCard}>
              <Text style={styles.deleteText}>Delete Card</Text>
            </Pressable>
          </View>
          <View style={styles.cardLogo}>
            <Icon name="cc-visa" size={40} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          title="Use as primary card"
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          containerStyle={styles.checkbox}
        />
      </View>

      <View style={styles.addNewCard}>
        <Text style={styles.addNewCardText}>Add New Card</Text>
        <Pressable style={styles.addButton} onPress={() => navigation.navigate('AddCard')}>
          <Icon name="plus" size={30} color="white" />
        </Pressable>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    width: '100%',
    position: 'relative',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLogo: {
    marginLeft: 'auto',
  },
  cardNumber: {
    fontSize: 18,
    marginBottom: 8,
    color: 'white',
  },
  cardName: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'white',
  },
  cardExpiry: {
    color: 'white',
  },
  checkboxContainer: {
    position: 'relative'
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  addNewCard: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addNewCardText: {
    right: 10
  },
  addButton: {
    backgroundColor: 'black',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteButton: {
    marginTop: 13,
    backgroundColor: 'red',
    borderRadius: 20,
    width: 110,
    height: 25
  },
  deleteText: {
    paddingTop: 3,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

});