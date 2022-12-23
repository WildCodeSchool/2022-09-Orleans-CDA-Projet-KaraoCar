import { Button } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { GrFormNext } from 'react-icons/gr';

const NextButton = () => {
  const isSubmitting = useFormContext().formState.isSubmitting;
  return (
    <Button
      width={{ base: '125px', md: '160px' }}
      height={{ base: '50px', md: '60px' }}
      backgroundColor={'#394E61'}
      color={'#FEFEFE'}
      isLoading={isSubmitting}
      type="submit"
      fontSize={{ base: '18', md: '22' }}
      shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
      rightIcon={
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            fill="none"
            stroke="#FEFEFE"
            stroke-width="2"
            points="9 6 15 12 9 18"
          ></polyline>
        </svg>
      }
    >
      {'Next'}
    </Button>
  );
};

export default NextButton;
