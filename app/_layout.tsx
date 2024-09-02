import { Text } from "@/components";
import { theme } from "@/config";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useEffect } from "react";
import { View } from "react-native";
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
    <ThemeProvider theme={theme}>
      <View
        style={{ backgroundColor: "white", flex: 1, justifyContent: "center" }}
      >
        <Text color="glowGreen">Usage</Text>
      </View>
    </ThemeProvider>
  );
}
