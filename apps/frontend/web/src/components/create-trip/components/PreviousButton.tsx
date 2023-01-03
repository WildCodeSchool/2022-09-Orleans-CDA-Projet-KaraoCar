import { Button, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

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
      width={{ base: '130px', md: '160px' }}
      height={{ base: '50px', md: '60px' }}
      backgroundColor={'#FEFEFE'}
      onClick={() => setStep(step - 1)}
      fontSize={{ base: '18', md: '22' }}
      border={'2px solid #394E61'}
      shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
      padding={'0'}
    >
      <BsArrowLeftShort size={'30'} />
      <Text as={'span'}>{'Previous'}</Text>
    </Button>
  );
};

export default PreviousButton;