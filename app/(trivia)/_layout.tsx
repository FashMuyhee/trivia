import React from 'react';
import {Stack} from 'expo-router';

const Layout = () => {
  return <Stack screenOptions={{headerShown: false, statusBarTranslucent: true, statusBarColor: '#2c5897', statusBarStyle: 'light'}} />;
};

export default Layout;
