import {ScrollView, View} from 'react-native';
import React from 'react';
import {GameCard, Header, ReferCard} from '@/features/home';

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView bounces={false}>
        <Header />
        {/* <GameCard /> */}
        <ReferCard />
      </ScrollView>
    </View>
  );
};

export default Home;
