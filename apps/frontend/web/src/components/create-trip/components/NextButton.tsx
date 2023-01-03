import { Button, Text } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { BsArrowRightShort } from 'react-icons/bs';

const NextButton = () => {
  const isSubmitting = useFormContext().formState.isSubmitting;
  return (
    <Button
      width={{ base: '130px', md: '160px' }}
      height={{ base: '50px', md: '60px' }}
      backgroundColor={'#394E61'}
      color={'#FEFEFE'}
      isLoading={isSubmitting}
      type="submit"
      fontSize={{ base: '18', md: '22' }}
      shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
      gap={'2'}
    >
      <Text as={'span'}>{'Next'}</Text>
      <BsArrowRightShort size={'30'} />
    </Button>
  );
};

export default NextButton;
