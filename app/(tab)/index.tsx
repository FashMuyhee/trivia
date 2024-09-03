import {View, Text} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';
import {GameCard, Header} from '@/features/home';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {};

const Home = (props: Props) => {
  return (
    <View>
      <Header />
      <GameCard />
    </View>
  );
};

export default Home;
