import {ScrollView, View} from 'react-native';
import React from 'react';
import {GameCard, Header, ReferCard, TopGamers} from '@/features/home';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Home = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{backgroundColor: '#f9f9f9', paddingBottom: bottom}}>
        <Header />
        <GameCard />
        <TopGamers />
        <ReferCard />
      </ScrollView>
    </View>
  );
};

export default Home;
