import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from 'react';
import NextButton from './components/NextButton';
import PreviousButton from './components/PreviousButton';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import backgroundImage from '../../assets/undraw_trip_date_background.svg';

const CarDetails = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const {
    control,
    register,
    setValue,
    formState: { isDirty, isValid },
  } = useFormContext();
  const errors = useFormContext().formState.errors;
  const [totalSeat, setTotalSeat] = useState(1);
  const [price, setPrice] = useState(8);

  useForm({
    defaultValues: {
      totalSeat: 1,
      price: 8,
    },
  });

  const decrementSeats = () => {
    if (totalSeat > 1) {
      setTotalSeat(totalSeat - 1);
      setValue('totalSeat', totalSeat - 1);
    }
  };

  const incrementSeats = () => {
    setTotalSeat(totalSeat + 1);
    setValue('totalSeat', totalSeat + 1);
  };

  const decrementPrice = () => {
    if (price > 0.5) {
      setPrice(price - 0.5);
      setValue('price', price - 0.5);
    }
  };

  const incrementPrice = () => {
    setPrice(price + 0.5);
    setValue('price', price + 0.5);
  };

  return (
    <VStack
      width={{ base: '320px', md: '420px', lg: '800px' }}
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      marginTop={{ base: '0', md: '6' }}
      justifyContent={'center'}
      gap={{ base: '4', md: '16' }}
      marginBottom={'6'}
    >
      <FormControl isInvalid={Boolean(errors.middleseat)} id="middleseat">
        <FormLabel
          htmlFor="middleseat"
          fontSize={{ base: '18', md: '24' }}
          textAlign={'center'}
          fontWeight={'regular'}
          margin={'0'}
        >
          {'Are you keeping the middleseat empty?'}
        </FormLabel>
        <Controller
          name="middleseat"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Stack
                direction={'row'}
                justifyContent={'center'}
                gap={'12'}
                marginTop={{ base: '2', md: '6' }}
              >
                <Radio size={'lg'} value="true" fontWeight={'light'}>
                  <Text
                    fontSize={{ base: '16', md: '20' }}
                    fontWeight={'light'}
                  >
                    {'Yes'}
                  </Text>
                </Radio>
                <Radio size={'lg'} value="false" fontWeight={'light'}>
                  <Text
                    fontSize={{ base: '16', md: '20' }}
                    fontWeight={'light'}
                  >
                    {'No'}
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          )}
          rules={{
            required: { value: true, message: 'This is required.' },
          }}
        />
        <FormErrorMessage justifyContent={'center'}>
          {errors?.middleseat && errors.middleseat.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.totalSeat)}>
        <FormLabel
          htmlFor="totalSeat"
          fontSize={{ base: '18', md: '24' }}
          textAlign={'center'}
          fontWeight={'regular'}
          margin={'0'}
        >
          {'How many passengers are you taking?'}
        </FormLabel>
        <HStack justifyContent={'center'} marginTop={{ base: '2', md: '6' }}>
          <Button
            variant={'outline'}
            onClick={() => decrementSeats()}
            height={'48px'}
            width={'48px'}
            backgroundColor={'#FEFEFE'}
            border={'1.5px solid slateblue'}
            rounded={'8px'}
          >
            -
          </Button>
          <Input
            width={'60px'}
            type={'number'}
            height={'60px'}
            rounded={'8px'}
            textAlign={'center'}
            id={'totalSeat'}
            fontSize={{ base: '16', md: '20' }}
            value={totalSeat}
            {...register('totalSeat', {
              value: totalSeat,
              min: { value: 1, message: 'Minimum 1 seat' },
              required: 'This is required',
              onChange: (e) => setTotalSeat(Number(e.target.value)),
            })}
          />
          <Button
            variant={'outline'}
            onClick={() => incrementSeats()}
            height={'48px'}
            width={'48px'}
            backgroundColor={'#FEFEFE'}
            border={'1.5px solid slateblue'}
            rounded={'8px'}
          >
            +
          </Button>
        </HStack>
        <FormErrorMessage justifyContent={'center'}>
          {errors?.totalSeat && errors.totalSeat.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.price)}>
        <FormLabel
          htmlFor="price"
          fontSize={{ base: '18', md: '24' }}
          textAlign={'center'}
          fontWeight={'regular'}
          margin={'0'}
        >
          {'How much are you asking for a seat?'}
        </FormLabel>
        <HStack justifyContent={'center'} marginTop={{ base: '2', md: '6' }}>
          <Button
            onClick={() => decrementPrice()}
            height={'48px'}
            width={'48px'}
            backgroundColor={'#FEFEFE'}
            border={'1.5px solid slateblue'}
            rounded={'8px'}
            variant={'outline'}
          >
            -
          </Button>
          <HStack justifyContent={'center'}>
            <InputGroup>
              <Input
                width={'100px'}
                type={'number'}
                height={'60px'}
                rounded={'8px'}
                textAlign={'center'}
                id={'price'}
                value={price}
                fontSize={{ base: '16', md: '20' }}
                fontWeight={'light'}
                z-index={'100'}
                {...register('price', {
                  value: price,
                  min: { value: 0.5, message: 'Minimum 0.5 euros' },
                  required: 'This is required',
                  onChange: (e) => setPrice(Number(e.target.value)),
                })}
              />
              <InputRightElement
                children={'€'}
                fontSize={{ base: '16', md: '20' }}
                height={'100%'}
                roundedTopEnd={'8px'}
                roundedBottomEnd={'8px'}
              />
            </InputGroup>
          </HStack>
          <Button
            onClick={() => incrementPrice()}
            height={'48px'}
            width={'48px'}
            border={'1.5px solid slateblue'}
            backgroundColor={'#FEFEFE'}
            rounded={'8px'}
            variant={'outline'}
          >
            +
          </Button>
        </HStack>
        <FormErrorMessage justifyContent={'center'}>
          {errors?.price && errors.price.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <HStack gap={'12'}>
        <PreviousButton step={step} setStep={setStep} />
        <NextButton isDirty={isDirty} isValid={isValid} />
      </HStack>
      <Image
        src={backgroundImage}
        display={{ base: 'none', lg: 'block' }}
        position={'absolute'}
        bottom={'0'}
        left={'00'}
        zIndex={'-100'}
      />
    </VStack>
  );
};

export default CarDetails;
