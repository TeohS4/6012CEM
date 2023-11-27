import React from 'react';
import { Pressable, Image, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Settings</Text>

      <View style={styles.profileHeader}>
        <Pressable onPress={()=>navigation.navigate('EditProfile')}>
          <Image source={require('./assets/icebear.png')} style={styles.profileIcon} />
        </Pressable>
        <View style={styles.profileInfo}>
          <Text style={styles.nameText}>TEOH WEI JIE</Text>
          <Text style={styles.emailText}>weijieteoh26@gmail.com</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('EditProfile')}>
          <Icon name="edit" size={24} color="blue" style={styles.editIcon} />
        </Pressable>
      </View>

      <View style={styles.options}>
        <Pressable style={styles.optionItem} onPress={() => navigation.navigate('Orders')}>
          <Icon name="shopping-cart" size={20} color="#000" style={styles.optionIcon} />
          <View>
            <Text style={styles.optionText}>My Orders</Text>
            <Text style={styles.viewText}>View My Orders</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#000" style={styles.chevronIcon} />
        </Pressable>

        <Pressable style={styles.optionItem} onPress={() => navigation.navigate('Shipping')}>
          <Icon name="truck" size={20} color="#000" style={styles.optionIcon} />
          <View>
            <Text style={styles.optionText}>Shipping Address</Text>
            <Text style={styles.viewText}>Manage Your Address</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#000" style={styles.chevronIcon} />
        </Pressable>

        <Pressable style={styles.optionItem} onPress={() => navigation.navigate('PaymentMethod')}>
          <Icon name="credit-card" size={20} color="#000" style={styles.optionIcon} />
          <View>
            <Text style={styles.optionText}>Payment Method</Text>
            <Text style={styles.viewText}>Manage My Payment Method</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#000" style={styles.chevronIcon} />
        </Pressable>

        <Pressable style={styles.optionItem} onPress={() => navigation.navigate('Wishlist')}>
          <Icon name="heart" size={20} color="#000" style={styles.optionIcon} />
          <View>
            <Text style={styles.optionText}>Wish List</Text>
            <Text style={styles.viewText}>View My Wish List</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#000" style={styles.chevronIcon} />
        </Pressable>
      </View>

      <Pressable style={styles.logoutButton} onPress={() => navigation.navigate('Launch')}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileInfo: {
    opacity: 0.8,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  emailText: {
    fontSize: 14,
  },
  options: {
    marginTop: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionIcon: {
    marginRight: 10,
  },
  chevronIcon: {
    marginLeft: 'auto',
  },
  optionText: {
    fontSize: 16,
  },
  viewText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: 'red',
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    position: 'bottom',
    bottom: 0,
    borderRadius: 15,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  editIcon: {
    marginLeft: 70,
  },
});
