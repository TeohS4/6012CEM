import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import AddBook from './AddBook';
import ManageBook from './ManageBook';

const Tab = createBottomTabNavigator();

const AdminBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'AddBook') {
            iconName = 'plus';
          } else if (route.name === 'ManageBook') {
            iconName = 'book';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}

    >
      <Tab.Screen name="AddBook" component={AddBook} />
      <Tab.Screen name="ManageBook" component={ManageBook} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  // Add any additional styles if needed
});

export default AdminBar;
