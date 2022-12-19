import { extendTheme } from '@chakra-ui/react';
import { ButtonTheme } from './components/button';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Lexend Deca', sans-serif`,
    body: `'Lexend Deca', sans-serif`,
  },
  components: {
    Button: ButtonTheme,
  },
});

export default theme;
