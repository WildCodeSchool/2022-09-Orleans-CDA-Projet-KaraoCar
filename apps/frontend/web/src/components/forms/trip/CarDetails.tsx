import { Box, VStack } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import CarDetailsBackground from './components/CarDetailsBackground';
import NextButton from './components/NextButton';
import PreviousButton from './components/PreviousButton';
import { useFormContext } from 'react-hook-form';


const CarDetails = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const { register } = useFormContext();
  const errors = useFormContext().formState.errors;

  return (
    <>
      <VStack
        width={{ base: '320px', md: '420px', lg: '500px' }}
        height={'100%'}
      >
      <PreviousButton step={step} setStep={setStep} />
      <NextButton />
      <Box
        display={{ base: 'none', lg: 'block' }}
        position={'absolute'}
        bottom={'0'}
        left={'00'}
        zIndex={'-100'}
      >
        <CarDetailsBackground />
      </Box>
      </VStack>
    </>
  );
};

export default CarDetails;
