import React from "react";
import { Tabs } from "expo-router";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="wallet" />
      <Tabs.Screen name="store" />
      <Tabs.Screen name="leaderboard" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
};

export default Layout;
