import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';


export default function Cart({ navigation }) {
  const [book1Quantity, setBook1Quantity] = useState(1);
  const [book2Quantity, setBook2Quantity] = useState(1);

  const handleBook1Decrease = () => {
    if (book1Quantity > 1) {
      setBook1Quantity(book1Quantity - 1);
    }
  };

  const handleBook1Increase = () => {
    setBook1Quantity(book1Quantity + 1);
  };

  const handleBook2Decrease = () => {
    if (book2Quantity > 1) {
      setBook2Quantity(book2Quantity - 1);
    }
  };

  const handleBook2Increase = () => {
    setBook2Quantity(book2Quantity + 1);
  };

  const handleRemove = (bookTitle) => {
    Toast.show({
      type: 'info',
      text1: `${bookTitle} Removed`,
      position: 'top',
      visibilityTime: 900,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>

        {/* Book 1 */}
        <View style={styles.card}>
          <Image source={require('./assets/aliens.png')} style={styles.bookImage} />
          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>Aliens</Text>
            <Text style={styles.bookPrice}>RM 25</Text>
            <View style={styles.quantityAdjustment}>
              <Pressable style={styles.quantityButton} onPress={handleBook1Decrease}>
                <Text style={styles.quantityButtonText}>-</Text>
              </Pressable>
              <Text style={styles.quantityText}>{book1Quantity}</Text>
              <Pressable style={styles.quantityButton} onPress={handleBook1Increase}>
                <Text style={styles.quantityButtonText}>+</Text>
              </Pressable>
            </View>
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemove('Aliens')}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          </View>
        </View>

        {/* Book 2 */}
        <View style={styles.card}>
          <Image source={require('./assets/IT.png')} style={styles.bookImage} />
          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>IT - Stephen King</Text>
            <Text style={styles.bookPrice}>RM 20</Text>
            <View style={styles.quantityAdjustment}>
              <Pressable style={styles.quantityButton} onPress={handleBook2Decrease}>
                <Text style={styles.quantityButtonText}>-</Text>
              </Pressable>
              <Text style={styles.quantityText}>{book2Quantity}</Text>
              <Pressable style={styles.quantityButton} onPress={handleBook2Increase}>
                <Text style={styles.quantityButtonText}>+</Text>
              </Pressable>
            </View>
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemove('IT - Stephen King')}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          </View>
        </View>

        {/* Total Price - Calculate based on individual book prices */}
        <Text style={styles.totalPrice}>
          Total Price: RM {book1Quantity * 25 + book2Quantity * 20}
        </Text>

        {/* Checkout Button */}
        <Pressable style={styles.checkoutButton} onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </Pressable>

        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 10,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookPrice: {
    fontSize: 16,
    marginTop: 5,
  },
  quantityAdjustment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  quantityButtonText: {
    fontSize: 20,
  },
  quantityText: {
    fontSize: 18,
    margin: 6,
  },
  removeButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  checkoutButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 11,
    marginBottom: 20,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
