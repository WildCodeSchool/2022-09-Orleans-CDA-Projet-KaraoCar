import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  ...config,
  colors: {
    slateblue: {
      500: '#394E61',
    },
  },
});

export default theme;
