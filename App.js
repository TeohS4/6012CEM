import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import Navigation from './navigation';
import LaunchScreen from './LaunchScreen';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Books from './Books';
import BookDetails from './BookDetails';
import Wishlist from './Wishlist';
import Cart from './Cart';
import Profile from './Profile';
import PaymentMethod from './PaymentMethod';
import Shipping from './Shipping';
import Orders from './Orders';
import OrderDetail from './OrderDetail';
import EditAdd from './EditAdd';
import AddAddress from './AddAddress';
import AddCard from './AddCard';
import Payment from './Payment';
import PaySuccess from './PaySuccess';
import Reviews from './Review';
import PostReview from './PostReview';
import EditProfile from './EditProfile';
import AdminBar from './AdminBar';
import AdminLogin from './AdminLogin';
import AddBook from './AddBook';
import ManageBook from './ManageBook';
import EditBook from './EditBook';

const Stack = createStackNavigator()

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName="Launch"
        screenOptions={{
          ...TransitionPresets.FadeFromBottomAndroid,
        }}
      >
        <Stack.Screen
          name='Launch'
          component={LaunchScreen}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
        />
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Books'
          component={Books}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='BookDetails'
          component={BookDetails}
        />
        <Stack.Screen
          name='Wishlist'
          component={Wishlist}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Navigation'
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Orders'
          component={Orders} />
        <Stack.Screen
          name='Shipping'
          component={Shipping} />
        <Stack.Screen
          name='EditAdd'
          component={EditAdd} />
        <Stack.Screen
          name='AddAddress'
          component={AddAddress} />
        <Stack.Screen
          name='PaymentMethod'
          component={PaymentMethod} />
        <Stack.Screen
          name='OrderDetail'
          component={OrderDetail} />
        <Stack.Screen
          name='AddCard'
          component={AddCard} />
        <Stack.Screen
          name='Payment'
          component={Payment} />
        <Stack.Screen
          name='PaySuccess'
          component={PaySuccess} />
        <Stack.Screen
          name='Reviews'
          component={Reviews} />
        <Stack.Screen
          name='PostReview'
          component={PostReview} />
        <Stack.Screen
          name='EditProfile'
          component={EditProfile}
        />
        <Stack.Screen
          name='AdminLogin'
          component={AdminLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AdminBar'
          component={AdminBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AddBook'
          component={AddBook}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ManageBook'
          component={ManageBook}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='EditBook'
          component={EditBook}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
