import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Search" component={Search}></Tab.Screen>
            <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;
