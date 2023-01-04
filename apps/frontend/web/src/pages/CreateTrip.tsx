import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import CarDetails from '../components/create-trip/CarDetails';
import Comment from '../components/create-trip/Comment';
import RouteDetails from '../components/create-trip/RouteDetails';
import Stepper from '../components/create-trip/Stepper';
import TripDate from '../components/create-trip/TripDate';
import { MusicalStyle } from '@libs/typings/src/interfaces/MusicalStyle';
import { redirect } from 'react-router-dom';

const CreateTrip = () => {
  const methods = useForm({ mode: 'onBlur' });
  const [step, setStep] = useState(1);
  const [isCreated, setCreated] = useState(false);

  function onSubmit(values: any) {
    console.log(values);
    if (step < 4) {
      setStep(step + 1);
    }
    if (step === 4) {
      createTripSlice();
    }
  }

  async function createTripSlice() {
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
    const music: MusicalStyle[] = [];

    for (let i = 0; i < musicalStyles.length; i++) {
      const musicStyle = {
        id: parseInt(musicalStyles[i], 10),
      };
      music.push(musicStyle);
    }

    const tripSlice = {
      trip: {
        carId: 1, // to replace once user part is done
        middleseat: middleseat,
        musicalStyles: music,
        comment: comment,
      },
      startingPoint: startingPoint,
      endingPoint: endingPoint,
      startingDateTime: dateTime,
      endingDateTime: endingDateTime,
      totalSeat: totalSeat,
      price: price,
      itineraryUrl: itineraryUrl, // to replace with google api values
      hasTolls: false, // to replace with google api values
    };

    try {
      const req = await fetch('http://localhost/api/trip-slices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tripSlice),
      });
      const resp = await req.json();
      console.log(resp.message);
      const status = req.status;
      status === 201 && setCreated(true);
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

  if (isCreated) {
    return (
      <HStack justifyContent={'center'}>
      <Alert
      marginTop={'2'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        status="success"
        variant="subtle"
        textAlign="center"
        height="220px"
        width={'50%'}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Trip created!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your trip and for using KaraoCar! Have a
          wonderful day!
        </AlertDescription>
      </Alert>
      </HStack>
    );
  }

  return (
    <Flex
      alignItems={'center'}
      flexDirection={'column'}
      gap={{ base: '0', md: '4' }}
      minHeight={{ md: 'calc(100vh - 80px)' }}
    >
      <Heading as={'h1'} textAlign={'center'} marginY={{ base: '8', md: '12' }}>
        {'Trip creation'}
      </Heading>
      <Stepper step={step} />
      <FormProvider {...methods}>
        <HStack
          height={'100%'}
          marginTop={{ base: '6', md: '18' }}
          marginBlockEnd={{ base: '6', md: '0' }}
        >
          <Box as={'form'} onSubmit={methods.handleSubmit(onSubmit)}>
            {formStep(step)}
          </Box>
        </HStack>
      </FormProvider>
    </Flex>
  );
};

export default CreateTrip;
