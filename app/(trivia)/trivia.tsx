import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const Trivia = (props: Props) => {
  return (
    <View>
      <Link href="/(trivia)/result">
        <Text>Trivia</Text>
      </Link>
    </View>
  );
};

export default Trivia;
