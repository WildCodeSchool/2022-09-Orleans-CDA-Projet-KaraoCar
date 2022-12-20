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
      width={{ base: '125px', md: '150px' }}
      height={{ base: '50px', md: '60px' }}
      backgroundColor={'#FEFEFE'}
      colorScheme={'blue'}
      color={'394E61'}
      onClick={() => setStep(step - 1)}
      fontSize={{ base: '18', md: '24' }}
      border={'2px solid #394E61'}
      shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
    >
      Previous
    </Button>
  );
};

export default PreviousButton;
