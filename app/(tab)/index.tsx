import {ScrollView, View} from 'react-native';
import React from 'react';
import {GameCard, Header, ReferCard, TopGamers} from '@/features/home';

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView bounces={false} style={{backgroundColor: '#f9f9f9'}}>
        <Header />
        <GameCard />
        <TopGamers />
        <ReferCard />
      </ScrollView>
    </View>
  );
};

export default Home;
