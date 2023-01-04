import { defineStyle } from '@chakra-ui/react';

const base = defineStyle({
  bg: '#394E61',
  color: '#FEFEFE',
  _hover: {
    bg: '#212C36',
    _disabled: {
      bg: '#394E61',
    }
  },
});

const outline = defineStyle({
  bg: '#FEFEFE',
  color: '#394E61',
  borderColor: '#394E61',
  _hover: {
    color: '#212C36',
    borderColor: '#212C36',
  },
});

export const ButtonTheme = {
  variants: {
    base: base,
    outline: outline,
  },
  defaultProps: {
    variant: 'base',
  },
};
