import React from 'react';
import {Tabs} from 'expo-router';
import {TopNavbar} from '@/features';
import {HomeIcon, SettingsIcon, StoreIcon, TrophyIcon, WalletIcon} from '@/components';
import {CurveTabBar} from '@/components';

const Layout = () => {
  return (
    <Tabs tabBar={props => <CurveTabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{headerTransparent: true, tabBarLabel: 'Home', header: () => <TopNavbar />, tabBarIcon: () => <HomeIcon />}}
      />
      <Tabs.Screen name="wallet" options={{tabBarLabel: 'Wallet', tabBarIcon: () => <WalletIcon />}} />
      <Tabs.Screen name="store" options={{tabBarLabel: 'Store', tabBarIcon: () => <StoreIcon />}} />
      <Tabs.Screen name="leaderboard" options={{tabBarLabel: 'LeaderBoard', tabBarIcon: () => <TrophyIcon />}} />
      <Tabs.Screen name="settings" options={{tabBarLabel: 'Settings', tabBarIcon: () => <SettingsIcon />}} />
    </Tabs>
  );
};

export default Layout;
