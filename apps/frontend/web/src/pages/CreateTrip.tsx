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
  const [step, setStep] = useState(3);
  const middleseat = methods.getValues('middleseat');
  const musicalStyles = methods.getValues('musicalStyles');
  const comment = methods.getValues('comment');
  const startingPoint = methods.getValues('startingPoint');
  const endingPoint = methods.getValues('endingPoint');

  const date = methods.getValues('date');
  const time = methods.getValues('time');
  const totalSeat = methods.getValues('totalSeat');
  const price = methods.getValues('price');
  const dateTime = date + ' ' + time;
  const dateTimeToDate = new Date(dateTime);
  const itineraryUrl = methods.getValues('itineraryUrl');
  const endingDateTime = new Date(dateTimeToDate.getTime() + 6000000); // to replace with google api values

  const tripSlice = {
    trip: {
      carId: 1, // to replace once user part is done
      middleseat: middleseat,
      musicId: 3,
      comment: comment,
    },
    startingPoint: startingPoint,
    endingPoint: endingPoint,
    startingDateTime: dateTime,
    endingDateTime: endingDateTime,
    totalSeat: totalSeat,
    price: price,
    itineraryUrl: itineraryUrl,
    hasTolls: false, // to replace with google api values
  };

  function onSubmit() {
    if (step < 4) {
      setStep(step + 1);
    }
    if (step === 4) {
      createTripSlice();
    }
  }

  console.log(tripSlice);

  async function createTripSlice() {
    try {
      const req = await fetch('http://localhost/api/trip-slices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tripSlice),
      });
      const status = await req.status;
      if (status === 201) {
        alert('Tripslice created');
      }
    } catch (err) {
      console.error(err);
    }
  }

  const formStep = (page: number) => {
    switch (page) {
      case 1:
        return <TripDate />;
      case 2:
        return <RouteDetails step={step} setStep={setStep} />;
      case 3:
        return <CarDetails step={step} setStep={setStep} />;
      case 4:
        return <Comment step={step} setStep={setStep} />;
      default:
        return <TripDate />;
    }
  };

  return (
    <Flex
      alignItems={'center'}
      flexDirection={'column'}
      gap={{ base: '0', md: '4' }}
      height={{ md: 'calc(100vh - 80px)' }}
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
          <HStack
            height={'100%'}
            marginTop={{ base: '6', md: '18' }}
            justifyContent={'center'}
            alignItems={'center'}
          >
            {formStep(step)}
          </HStack>
        </form>
      </FormProvider>
    </Flex>
  );
};

export default CreateTrip;
