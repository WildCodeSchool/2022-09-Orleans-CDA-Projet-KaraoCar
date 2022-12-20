import { Button } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

const NextButton = () => {
  const isSubmitting = useFormContext().formState.isSubmitting;
  return (
    <Button
      width={{ base: '125px', md: '150px' }}
      height={{ base: '50px', md: '60px' }}
      backgroundColor={'#394E61'}
      colorScheme={'blue'}
      color={'white'}
      isLoading={isSubmitting}
      type="submit"
      fontSize={{ base: '18', md: '24' }}
      shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
    >
      Next
    </Button>
  );
};

export default NextButton;
