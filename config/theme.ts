import { createTheme } from "@shopify/restyle";

const palette = {
  bluePrimary: "#2364AA",
  blueAccent: "#3386CE",

  cyan: "#00CBF7",

  lemon: "#00EA62",
  darkGreen: "#009028",
  glowGreen: "#10DC78",

  black: "#000000",
  white: "#F0F2F3",
};

export const theme = createTheme({
  colors: palette,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontFamily: "bold",
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      fontFamily: "regular",
    },
    defaults: {
      fontSize: 14,
      fontFamily: "regular",
    },
  },
});

export type Theme = typeof theme;
