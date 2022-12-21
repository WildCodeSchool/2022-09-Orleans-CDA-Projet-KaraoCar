import { Button, Icon } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { GrFormPrevious } from 'react-icons/gr';

const PreviousButton = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Button
      width={{ base: '125px', md: '160px' }}
      height={{ base: '50px', md: '60px' }}
      backgroundColor={'#FEFEFE'}
      onClick={() => setStep(step - 1)}
      fontSize={{ base: '18', md: '22' }}
      border={'2px solid #394E61'}
      shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
      leftIcon={<Icon as={GrFormPrevious} stroke={'red.500'} />}
    >
      Previous
    </Button>
  );
};

export default PreviousButton;
