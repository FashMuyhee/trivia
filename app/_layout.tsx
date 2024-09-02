import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useEffect } from "react";
import { Text, View } from "react-native";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    regular: require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
    bold: require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
    light: require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    medium: require("../assets/fonts/SpaceGrotesk-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ backgroundColor: "red", flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontFamily: "medium" }}>Usage</Text>
    </View>
  );
}
