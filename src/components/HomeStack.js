import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login';
import test from '../screens/test';
import React from 'react';
import Header from './Header';
import Top from '../screens/TopBar';
import HomeDealer from '../screens/homeDealer';
import SelectDealer from '../screens/selectDealer';
import CartItem from '../screens/cartItem';

const screens = {
  Home: {
    screen: CartItem,
    navigationOptions: {
      headerTitle: () => <Header title="LITRO GAS" />,
    },
  },
  Top: {
    screen: test,
    navigationOptions: {
      headerTitle: () => <Header title="Top For" />,
    },
  },
  Test: {
    screen: test,
    navigationOptions: {
      headerTitle: () => <Header title="Test For" />,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#2553A8',
      height: 59,
    },
    headerTintColor: '#FFFFFF',
  },
});

export default createAppContainer(HomeStack);
