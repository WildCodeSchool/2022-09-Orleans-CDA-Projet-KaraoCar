import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import CarDetails from './CarDetails';
import Comment from './Comment';
import Date from './TripDate';
import RouteDetails from './RouteDetails';
import Stepper from './Stepper';
import { useForm, FormProvider } from 'react-hook-form';
import './trip.css';

const Index = () => {
  const methods = useForm();

  function onSubmit(values: any) {
    setStep(step + 1);
    console.log(values);
  }
  const [step, setStep] = useState(3);

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
        return <CarDetails step={step} setStep={setStep} />;
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
      height={'calc(100vh - 80px)'}
    >
      <Heading as={'h1'} textAlign={'center'} marginY={{ base: '8', md: '12' }}>
        Trip creation
      </Heading>
      <Stepper step={step} />
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            style={{ height: '100%' }}
          >
            <HStack height={'100%'} marginTop={{ base: '6', md: '18' }} justifyContent={'center'} alignItems={'center'}>
              {formStep(step)}
            </HStack>
          </form>
        </FormProvider>
    </Flex>
  );
};

export default Index;
