import { Button, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import CarDetails from './CarDetails';
import Comment from './Comment';
import Date from './TripDate';
import RouteDetails from './RouteDetails';
import Stepper from './Stepper';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import './trip.css';

const Index = () => {
  const methods = useForm();

  function onSubmit(values: any) {
    setStep(step + 1);
    console.log(values);
  }
  const [step, setStep] = useState(2);

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
        return <RouteDetails step={step} setStep={setStep} />;
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
      gap={{ base: '0', md: '4' }}
      height={'100vh'}
    >
      <Heading as={'h1'} textAlign={'center'} marginY={{ base: '8', md: '12' }}>
        Trip creation
      </Heading>
      <Stepper step={step} setStep={setStep} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{formStep(step)}</form>
      </FormProvider>
      <HStack marginX={'auto'}>
        {step > 2 && <Button onClick={() => removeStep()}>Previous</Button>}
        {step > 2 && <Button onClick={() => addStep()}>Next</Button>}
      </HStack>
    </Flex>
  );
};

export default Index;
