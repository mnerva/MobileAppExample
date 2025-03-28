import { Text, View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./style";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Favorites from "./Favorites";
import Profile from "./Profile";
import { useState } from "react";
import Splash from "./auth/index";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else {
              iconName = 'home-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Favorites' component={Favorites} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}