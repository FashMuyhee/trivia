import React from 'react';
import {Stack} from 'expo-router';
import {TriviaProvider} from '@/features/trivia';

const Layout = () => {
  return (
    <TriviaProvider>
      <Stack screenOptions={{headerShown: false, statusBarTranslucent: true, statusBarColor: '#2c5897', navigationBarColor: '#2c5897'}} />
    </TriviaProvider>
  );
};

export default Layout;
