import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const Home = (props: Props) => {
  return (
    <View>
      <Link href="/trivia">
        <Text>Home</Text>
      </Link>
    </View>
  );
};

export default Home;
