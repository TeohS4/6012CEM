import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Orders({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <View style={styles.card}>
        <Text style={styles.dateText}>20 Oct 2023</Text>
        <View style={styles.header}>
          <Text style={styles.bold}>Order No. 68</Text>
        </View>
        <Text>Tracking Number: 100345</Text>
        <Text>Items: 2</Text>
        <Text style={[styles.bold, styles.totalPrice]}>Total Price: RM34</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.deliveredText}>Delivered</Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#E1E1E1' : 'transparent' },
            ]}
            onPress={() => {
              navigation.navigate('OrderDetail');
            }}
          >
            <Text style={styles.buttonText}>Details</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  card: {
    backgroundColor: '#fff',
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
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  dateText: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  totalPrice: {
    marginTop: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'blue',
  },
  deliveredText: {
    color: 'green',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
