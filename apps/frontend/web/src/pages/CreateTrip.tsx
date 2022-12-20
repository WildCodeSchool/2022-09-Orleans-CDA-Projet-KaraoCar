import { Flex, Heading, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import CarDetails from '../components/create-trip/CarDetails';
import Comment from '../components/create-trip/Comment';
import RouteDetails from '../components/create-trip/RouteDetails';
import Stepper from '../components/create-trip/Stepper';
import TripDate from '../components/create-trip/TripDate';
import '../components/create-trip/trip.css';

const CreateTrip = () => {
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
        return <TripDate />;
      case 2:
        return <RouteDetails step={step} setStep={setStep} />;
      case 3:
        return <CarDetails step={step} setStep={setStep} />;
      case 4:
        return <Comment />;
      default:
        return <TripDate />;
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

export default CreateTrip