import {ScrollView, View} from 'react-native';
import React from 'react';
import {GameCard, Header, ReferCard, TopGamers} from '@/features/home';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{backgroundColor: '#f9f9f9'}}>
        <Header />
        <GameCard />
        <TopGamers />
        <ReferCard />
      </ScrollView>
    </View>
  );
};

export default Home;
