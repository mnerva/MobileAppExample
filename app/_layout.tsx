import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
 
export default function Layout() {
  const navigation = useNavigation();

  useEffect(() => {
    console.log(navigation.getState());
  }, [navigation]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
    </Stack>
  );
}