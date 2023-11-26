import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './Home';
import BooksScreen from './Books';
import CartScreen from './Cart';
import ProfileScreen from './Profile';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Books') {
            iconName = 'book';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Books" component={BooksScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
