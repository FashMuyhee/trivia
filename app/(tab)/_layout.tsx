import React from 'react';
import {Tabs} from 'expo-router';
import {TopNavbar} from '@/features';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';
import {CancelIcon, CheckIcon, HomeIcon, SettingsIcon, StoreIcon, TrophyIcon, WalletIcon} from '@/components';

const Layout = () => {
  const {colors} = useTheme<Theme>();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.bluePrimary,
        tabBarActiveBackgroundColor: colors.blueDark,
      }}
      tabBar={props => (
        <BottomFabBar
          mode={'default'}
          focusedButtonStyle={{
            elevation: 0,
          }}
          {...props}
        />
      )}>
      <Tabs.Screen
        name="index"
        // component={Home}
        options={{headerTransparent: true, header: () => <TopNavbar />, tabBarIcon: () => <HomeIcon />}}
      />
      <Tabs.Screen name="wallet" options={{tabBarIcon: () => <WalletIcon />}} />
      <Tabs.Screen name="store" options={{tabBarIcon: () => <StoreIcon />}} />
      <Tabs.Screen name="leaderboard" options={{tabBarIcon: () => <TrophyIcon />}} />
      <Tabs.Screen name="settings" options={{tabBarIcon: () => <SettingsIcon />}} />
    </Tabs>
  );
};

export default Layout;
