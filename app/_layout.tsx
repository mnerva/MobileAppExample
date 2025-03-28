import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import SplashScreen from './index';
import Signin from '../src/screens/Signin'
import Signup from '../src/screens/Signup';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Stack.Navigator>
        <Stack.Screen name="index" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </SafeAreaView>
  );
}