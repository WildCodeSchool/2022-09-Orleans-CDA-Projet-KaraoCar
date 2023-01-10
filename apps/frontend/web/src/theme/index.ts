import { extendTheme } from '@chakra-ui/react';
import { ButtonTheme } from './components/button';
import '@fontsource/lexend-deca';
import '@fontsource/lexend-deca/300.css';
import '@fontsource/lexend-deca/400.css';
import '@fontsource/lexend-deca/500.css';
import '@fontsource/lexend-deca/600.css';
import '@fontsource/lexend-deca/700.css';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    slateblue: '#394E61',
  },
  fonts: {
    heading: `'Lexend Deca', sans-serif`,
    body: `'Lexend Deca', sans-serif`,
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 600,
    semibold: 700,
  },
  components: {
    Button: ButtonTheme,
  },
});

export default theme;
