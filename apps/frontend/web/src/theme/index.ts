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
  shadows: {
    mdRight: '0 3px 6px 0 rgba(0, 0, 0, 0.5)',
  },
  components: {
    Button: ButtonTheme,
  },
});

export default theme;
