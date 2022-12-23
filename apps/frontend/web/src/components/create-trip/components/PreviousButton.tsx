import { Button } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

const PreviousButton = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Button
      variant={'outline'}
      width={{ base: '125px', md: '160px' }}
      height={{ base: '50px', md: '60px' }}
      backgroundColor={'#FEFEFE'}
      onClick={() => setStep(step - 1)}
      fontSize={{ base: '18', md: '22' }}
      border={'2px solid #394E61'}
      shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
      leftIcon={
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
            stroke="#394E61"
            stroke-width="2"
            points="9 6 15 12 9 18"
            transform="matrix(-1 0 0 1 24 0)"
          ></polyline>
        </svg>
      }
    >
      {'Previous'}
    </Button>
  );
};

export default PreviousButton;
