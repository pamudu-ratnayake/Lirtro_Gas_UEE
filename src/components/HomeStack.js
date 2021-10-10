import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

import React from 'react';
import Header from './Header';
import CartItem from '../screens/cartItem';
import HomeDealer from '../screens/homeDealer';
import SelectDealer from '../screens/selectDealer';
import AddAddress from '../screens/AddAddress';

const switchNavigator = createSwitchNavigator({
  mainFlow: createMaterialBottomTabNavigator(
    {
      Home: createStackNavigator(
        {
          HomeTop: {
            screen: HomeScreen,
            navigationOptions: {
              headerTitle: () => <Header title="LITRO GAS" />,
            },
          },

          Test2: {
            screen: CartItem,
            navigationOptions: {
              headerTitle: () => <Header title="PRODUCT" />,
            },
          },
          AddAddress: {
            screen: AddAddress,
            navigationOptions: {
              headerTitle: () => <Header title="LITRO GAS" />,
            },
          },
        },
        {
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#2553A8',
              height: 50,
            },
            headerTintColor: '#FFFFFF',
          },
        },
      ),
      TestBar: {
        screen: HomeDealer,
        navigationOptions: {
          tabBarLabel: 'Dealer',
          tabBarColor: '#2553A8',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        },
      },
      Login: {
        screen: SelectDealer,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarColor: '#2553A8',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        },
      },
    },
    {
      initialRouteName: 'Home',
      activeColor: '#000000',
      inactiveColor: '#000000',
      barStyle: {backgroundColor: '#FFFFFF'},
    },
  ),
});

export default createAppContainer(switchNavigator);
