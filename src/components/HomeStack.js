import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from '../screens/login';
import HomeScreen from '../screens/HomeScreen';
import test from '../screens/test';
import React from 'react';
import Header from './Header'
import CartItem from '../screens/cartItem';
import HomeDealer from '../screens/homeDealer';
import SelectDealer from '../screens/selectDealer';
import Top from '../screens/TopBar';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const switchNavigator = createSwitchNavigator({
    mainFlow: createMaterialBottomTabNavigator({
        Home: createStackNavigator({
            HomeTop: {
                screen: HomeScreen,
                navigationOptions : {
                    headerTitle: () => <Header title='LITRO GAS'/>
                }
            },
            Top2: {
                screen: test,
                navigationOptions : {
                    headerTitle: () => <Header title='Top For'/>
                }
            },
            Test2: {
                screen: CartItem,
                navigationOptions : {
                    headerTitle: () => <Header title='PRODUCT'/>
                }
            }
        },   { defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#2553A8",
                height: 50,
            },
            headerTintColor: "#FFFFFF"
        }}),
        TestBar: {
            screen: HomeDealer,
            navigationOptions : {
                tabBarLabel: 'Dealer',
                tabBarColor: '#2553A8',
                tabBarIcon: ({ color }) => (
                  <Icon name="ios-home" color={color} size={26} />
                ),
            }
        },
        Login: {
            screen: SelectDealer,
            navigationOptions : {
                tabBarLabel: 'Home',
                tabBarColor: '#2553A8',
                tabBarIcon: ({ color }) => (
                  <Icon name="ios-home" color={color} size={26} />
                ),
            }
        }
    },
    {
        initialRouteName: 'Home',
        activeColor: '#000000',
        inactiveColor: '#000000',
        barStyle: { backgroundColor: '#FFFFFF' },
        
      }
    ),

});



export default createAppContainer(switchNavigator);
