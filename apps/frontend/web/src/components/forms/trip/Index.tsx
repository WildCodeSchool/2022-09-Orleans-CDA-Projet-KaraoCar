import { Button, Container, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import CarDetails from './CarDetails';
import Comment from './Comment';
import Date from './TripDate';
import RouteDetails from './RouteDetails';
import Stepper from './Stepper';

const Index = () => {
  const [step, setStep] = useState(1);

  const removeStep = () => {
    if (step - 1 >= 1) {
      setStep(step - 1);
    }
  };

  const addStep = () => {
    if (step + 1 <= 4) {
      setStep(step + 1);
    }
  };

  const formStep = (page: number) => {
    switch (page) {
      case 1:
        return <Date />;
      case 2:
        return <RouteDetails />;
      case 3:
        return <CarDetails />;
      case 4:
        return <Comment />;
      default:
        return <Date />;
    }
  };

  return (
    <Flex
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <Heading as={'h1'} textAlign={'center'} marginY={'10'}>
        Trip creation
      </Heading>
      <Stepper step={step} setStep={setStep}/>
      {formStep(step)}
      <HStack marginX={'auto'}>
      {step > 1 && <Button onClick={() => removeStep()}>Previous</Button>}
      <Button onClick={() => addStep()}>Next</Button></HStack>
    </Flex>
  );
};

export default Index;
