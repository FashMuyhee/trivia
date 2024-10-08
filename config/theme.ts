import {createTheme} from '@shopify/restyle';

const palette = {
  bluePrimary: '#2364AA',
  blueAccent: '#3386CE',
  blueSecondary: '#4171ac',
  blueDark: '#17478B',

  cyan: '#00CBF7',
  cyanLight: '#DFF9FF',

  lemon: '#00EA62',
  darkGreen: '#009028',
  glowGreen: '#10DC78',

  black: '#000000',
  black2: '#3B3B3B',
  white: '#F0F2F3',

  errorPrimary: '#C30012',
  errorSecondary: '#F69798',
  errorAccent: '#F9474B',
};

export const theme = createTheme({
  colors: palette,
  spacing: {
    xs: 5,
    s: 12,
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
    heading: {
      fontFamily: 'bold',
      fontSize: 48,
    },
    subHeading: {
      fontFamily: 'bold',
      fontSize: 32,
    },
    medium: {
      fontSize: 24,
      fontFamily: 'medium',
    },
    small: {
      fontSize: 12,
      fontFamily: 'regular',
    },
    defaults: {
      fontSize: 14,
      fontFamily: 'regular',
    },
  },
});

export type Theme = typeof theme;
