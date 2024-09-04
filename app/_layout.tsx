import {theme} from '@/config';
import {ThemeProvider} from '@shopify/restyle';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import {useEffect} from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, err] = useFonts({
    regular: require('../assets/fonts/SpaceGrotesk-Regular.ttf'),
    bold: require('../assets/fonts/SpaceGrotesk-Bold.ttf'),
    light: require('../assets/fonts/SpaceGrotesk-Light.ttf'),
    medium: require('../assets/fonts/SpaceGrotesk-Medium.ttf'),
    dmsans: require('../assets/fonts/DMSans-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack initialRouteName="(tab)" screenOptions={{headerShown: false}}>
        <Stack.Screen name="(tab)" options={{statusBarColor: 'transparent', statusBarTranslucent: true}} />
        <Stack.Screen name="(trivia)" />
      </Stack>
    </ThemeProvider>
  );
}
