import { useFormContext } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  HStack,
  Box,
  VStack,
} from '@chakra-ui/react';
import NextButton from './components/NextButton';
import RouteDetailsBackground from './components/RouteDetailsBackground';

export default function TripDate() {
  const { register } = useFormContext();
  const errors = useFormContext().formState.errors;

  return (
    <>
      <VStack
        width={{ base: '320px', md: '420px', lg: '500px' }}
        height={'100%'}
      >
        <FormControl
          isInvalid={Boolean(
            errors.startingPoint || errors.endingPoint || errors.date
          )}
          marginBottom={{ base: '6', md: '12' }}
          marginTop={{ base: '6', md: '8' }}
        >
          <FormLabel
            htmlFor="startingPoint"
            fontSize={{ base: '18', md: '24' }}
            textAlign={'center'}
            fontWeight={'regular'}
          >
            Where are you leaving from?
          </FormLabel>
          <Input
            backgroundColor={'#F6F6F6'}
            border={'2px solid #394E61'}
            height={{ base: '55px', md: '70px' }}
            id="startingPoint"
            placeholder="3 rue de la république, 45000 Orléans"
            fontSize={{ base: '18', md: '24' }}
            fontWeight={'light'}
            {...register('startingPoint', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.startingPoint && errors.startingPoint.message?.toString()}
          </FormErrorMessage>
          <FormLabel
            htmlFor="endingPoint"
            fontSize={{ base: '18', md: '24' }}
            textAlign={'center'}
            fontWeight={'regular'}
            marginTop={{ base: '6', md: '20' }}
          >
            Where are going to?
          </FormLabel>
          <Input
            backgroundColor={'#F6F6F6'}
            border={'2px solid #394E61'}
            height={{ base: '55px', md: '70px' }}
            id="endingPoint"
            placeholder="23 rue Colbert, 37000 Tours"
            fontSize={{ base: '18', md: '24' }}
            fontWeight={'light'}
            {...register('endingPoint', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.endingPoint && errors.endingPoint.message?.toString()}
          </FormErrorMessage>
          <FormLabel
            htmlFor="date"
            fontSize={{ base: '18', md: '24' }}
            textAlign={'center'}
            fontWeight={'regular'}
            marginTop={{ base: '6', md: '20' }}
          >
            When are you going?
          </FormLabel>
          <HStack>
            <Input
              backgroundColor={'#F6F6F6'}
              border={'2px solid #394E61'}
              type="date"
              height={{ base: '55px', md: '70px' }}
              id="date"
              fontSize={{ base: '18', md: '24' }}
              fontWeight={'light'}
              {...register('date', {
                required: 'This is required',
              })}
            />
            <Input
              backgroundColor={'#F6F6F6'}
              border={'2px solid #394E61'}
              type="time"
              height={{ base: '55px', md: '70px' }}
              id="date"
              fontSize={{ base: '18', md: '24' }}
              fontWeight={'light'}
              {...register('time', {
                required: 'This is required',
              })}
            />{' '}
          </HStack>
        </FormControl>
        <NextButton />
      </VStack>
      <Box
        display={{ base: 'none', lg: 'block' }}
        position={'absolute'}
        bottom={'0'}
        right={'00'}
        zIndex={'-100'}
      >
        <RouteDetailsBackground />
      </Box>
    </>
  );
}
