import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home'
import BlogList from '../Screens/BlogList'
import {Text} from 'react-native'
import BlockList from '../Screens/BlogList'

const { Navigator, Screen} = createStackNavigator();

export default function Stack() {
    return (
        <Navigator screenOptions={{ headerStyle: { backgroundColor: '#3d84b8' } }}>
            <Screen
                name='Blog'
                component={Home}
                options={{
                    title: 'Blog Posts',
                    headerTitleStyle: { color: 'white', fontSize: 25 }
                }}
            />
            <Screen
                name='productDetails'
                component={BlockList}
                options={{
                    title: 'Product Details',
                    headerBackTitleVisible: true,
                    headerTitleStyle: { color: 'white', fontSize: 25,textAlign:'center' },
                    headerBackTitleStyle: {
                        paddingRight: 10,
                        fontWeight: 'bold',
                    },
                    
                }}
            />

        </Navigator>
    );
}