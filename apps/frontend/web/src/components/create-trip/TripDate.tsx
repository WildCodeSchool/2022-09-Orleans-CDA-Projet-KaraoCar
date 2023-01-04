import { useFormContext } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react';
import NextButton from './components/NextButton';
import backgroundImage from '../../assets/undraw_trip_date_background.svg';

export default function TripDate() {
  const {
    register,
    formState: { isDirty, isValid },
  } = useFormContext();
  const errors = useFormContext().formState.errors;

  return (
    <>
      <VStack
        width={{ base: '320px', md: '420px', lg: '500px' }}
        height={'100%'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'start'}
        marginBottom={{ base: '6', md: '6' }}
        gap={{ base: '2', md: '6' }}
        marginTop={{ base: '0', md: '6' }}
      >
        <FormControl isInvalid={Boolean(errors.startingPoint)}>
          <FormLabel
            htmlFor="startingPoint"
            fontSize={{ base: '18', md: '24' }}
            textAlign={'center'}
            fontWeight={'regular'}
          >
            {'Where are you leaving from?'}
          </FormLabel>
          <Input
            backgroundColor={'#F6F6F6'}
            border={'2px solid slateblue'}
            height={{ base: '55px', md: '70px' }}
            id="startingPoint"
            placeholder="Orléans"
            fontSize={{ base: '16', md: '20' }}
            fontWeight={'light'}
            {...register('startingPoint', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length is 4' },
              maxLength: { value: 255, message: 'Maximum length is 255' },
            })}
          />
          <FormErrorMessage maxHeight={'10'}>
            {errors.startingPoint && errors.startingPoint.message?.toString()}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.endingPoint)}>
          <FormLabel
            htmlFor="endingPoint"
            fontSize={{ base: '18', md: '24' }}
            textAlign={'center'}
            fontWeight={'regular'}
            marginTop={{ base: '6', md: '6' }}
          >
            {'Where are going to?'}
          </FormLabel>
          <Input
            backgroundColor={'#F6F6F6'}
            border={'2px solid slateblue'}
            height={{ base: '55px', md: '70px' }}
            id="endingPoint"
            placeholder="Tours"
            fontSize={{ base: '16', md: '20' }}
            fontWeight={'light'}
            {...register('endingPoint', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length is 4' },
              maxLength: { value: 255, message: 'Maximum length is 255' },
            })}
          />
          <FormErrorMessage maxHeight={'10'}>
            {errors.endingPoint && errors.endingPoint.message?.toString()}
          </FormErrorMessage>
        </FormControl>
        <VStack width={'100%'}>
          <FormControl isInvalid={Boolean(errors.date)} marginBottom={'6'}>
            <FormLabel
              htmlFor="date"
              fontSize={{ base: '18', md: '24' }}
              textAlign={'center'}
              fontWeight={'regular'}
              marginTop={{ base: '6', md: '6' }}
            >
              {'When are you going?'}
            </FormLabel>
            <HStack width={'100%'}>
              <Input
                backgroundColor={'#F6F6F6'}
                border={'2px solid slateblue'}
                type="date"
                height={{ base: '55px', md: '70px' }}
                id="date"
                fontSize={{ base: '18', md: '24' }}
                fontWeight={'light'}
                placeholder="03/03/2022"
                {...register('date', {
                  required: 'This is required',
                })}
                min={new Date().toISOString().split('T')[0]}
              />

              <Input
                backgroundColor={'#F6F6F6'}
                border={'2px solid slateblue'}
                type="time"
                height={{ base: '55px', md: '70px' }}
                id="time"
                fontSize={{ base: '18', md: '24' }}
                fontWeight={'light'}
                {...register('time', {
                  required: 'This is required',
                })}
              />
            </HStack>
            <FormErrorMessage maxHeight={'10'}>
              {errors.date && errors.date.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </VStack>
        <NextButton isDirty={isDirty} isValid={isValid}/>
      </VStack>
      <Image
        src={backgroundImage}
        display={{ base: 'none', lg: 'block' }}
        position={'absolute'}
        bottom={'0'}
        right={'00'}
        zIndex={'-100'}
      />
    </>
  );
}
