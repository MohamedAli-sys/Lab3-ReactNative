import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import FontAwesome from '@expo/vector-icons'
import {Entypo} from '@expo/vector-icons';
import Stack from './stack';

const { Navigator, Screen } = createBottomTabNavigator();


export default function BottomTabNav() {
  return (
    <Navigator tabBarOptions={{style:{backgroundColor:'#3d84b8',paddingVertical:5,height:55}}}>
      <Screen
        name="Home" 
        component={Stack}
        options={{
          title:'Home',
          tabBarLabel: ({focused})=><Text style={{color:focused ? 'black':'white' , fontWeight:'bold'}}>Home</Text>,
          style:{color:'red'},
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color='white' />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({focused})=><Text style={{color:focused ? 'black':'white', fontWeight:'bold' }}>Profile</Text>,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={24} color='white' />
          ),
        }}
      />
    </Navigator>
  );
}

