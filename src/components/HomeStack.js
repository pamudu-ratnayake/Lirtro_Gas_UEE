import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

import React from 'react';
import Header from './Header';
import CartItem from '../screens/cartItem';
import HomeDealer from '../screens/homeDealer';
import SelectDealer from '../screens/selectDealer';
import AddAddress from '../screens/AddAddress';
import Orders from '../screens/Orders';
import Payment from '../screens/payment';
import OrderDealer from '../screens/orderDealer';
import ProfileDealer from '../screens/profileDealer';
import MyProfile from '../screens/myProfile';
import AcceptedOrders from '../screens/acceptedOrder';
import DeliveredOrders from '../screens/deliveredOrders';
import DispatchedOrders from '../screens/dispatchedOrders';
import MyCart from '../screens/Mycart';
import PendingOrders from '../screens/pendingOrders';
import Summery from '../screens/Summery';
import Login from '../screens/login';
import Register from '../screens/register';
import Map from '../screens/map';

const switchNavigator = createSwitchNavigator({
  Login: createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: () => <Header title="LOG IN" />,
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
  },),
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

          Product: {
            screen: CartItem,
            navigationOptions: {
              headerTitle: () => <Header title="PRODUCT" />,
            },
          },
          Payment: {
            screen: Payment,
            navigationOptions: {
              headerTitle: () => <Header title="Payment" />,
            },
          },
          AddAddress: {
            screen: AddAddress,
            navigationOptions: {
              headerTitle: () => <Header title="ADD ADDRESS" />,
            },
          },
          OrderDealer: {
            screen: OrderDealer,
            headerTitle: () => <Header title="LITRO GAS" />,
          },
          ProfileDealer: {
            screen: ProfileDealer,
            headerTitle: () => <Header title="LITRO GAS" />,
          },
          Login: {
            screen: Login,
            headerTitle: () => <Header title="LOG IN" />,
          },
          Register: {
            screen: Register,
            headerTitle: () => <Header title="LITRO GAS" />,
          },
          MyCart: {
            screen: MyCart,
            headerTitle: () => <Header title="LITRO GAS" />,
          },
          Map: {
            screen: Map,
            headerTitle: () => <Header title="LITRO GAS" />,
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
      // Orders: {
      //   screen: HomeDealer,
      //   navigationOptions: {
      //     tabBarLabel: 'Orders',
      //     tabBarColor: '#2553A8',
      //     tabBarIcon: ({color}) => (
      //       <Icon name="ios-home" color={color} size={26} />
      //     ),
      //   },
      // },

      Orders: createStackNavigator(
        {
          Orders: {
            screen: HomeDealer,
            headerTitle: () => <Header title="LITRO GAS" />,
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
 
        Profile: createStackNavigator(
        {
          MyProfile: {
            screen: MyProfile,
            headerTitle: () => <Header title="LITRO GAS" />,
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

      // Profile: {
      //   screen: MyProfile,
      //   navigationOptions: {
      //     tabBarLabel: 'Profile',
      //     tabBarColor: '#2553A8',
      //     tabBarIcon: ({color}) => (
      //       <Icon name="ios-home" color={color} size={26} />
      //     ),
      //   },
      // },
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
