import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import NextButton from './components/NextButton';
import PreviousButton from './components/PreviousButton';

const RouteDetails = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const { control } = useFormContext();
  const errors = useFormContext().formState.errors;

  return (
    <>
      <HStack
        height={{ base: '100%', md: '400px' }}
        display={'flex'}
        marginTop={{ base: '6', md: '24' }}
      >
        <VStack
          width={{ base: '320px', md: '420px', lg: '500px' }}
          height={'100%'}
          justifyContent={'space-between'}
        >
          <FormControl
            isInvalid={Boolean(errors.itineraryUrl)}
            id="itineraryUrl"
          >
            <FormLabel
              htmlFor="itineraryUrl"
              fontSize={{ base: '18', md: '24' }}
              textAlign={'start'}
              fontWeight={'regular'}
              marginBottom={'6'}
              justifySelf={'start'}
            >
              What is your route?
            </FormLabel>
            <Controller
              name="itineraryUrl"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  marginLeft={'6'}
                  {...field}
                  marginBottom={'4'}
                  fontWeight={'light'}
                  fontSize={{ base: '16', md: '20' }}
                  colorScheme={'slateblue'}
                >
                  <Stack>
                    <Radio size={'lg'} value="1">
                      First
                    </Radio>
                    <Radio size={'lg'} value="2">
                      Second
                    </Radio>
                    <Radio size={'lg'} value="3">
                      Third
                    </Radio>
                  </Stack>
                </RadioGroup>
              )}
              rules={{
                required: { value: true, message: 'This is required.' },
              }}
            />
            <FormErrorMessage>
              {errors?.itineraryUrl && errors.itineraryUrl.message?.toString()}
            </FormErrorMessage>
          </FormControl>

          <Image // to replace with google maps
            src={'./images/map.webp'}
            height={'100%'}
            rounded={'8px'}
            fit={'cover'}
            display={{ base: 'block', md: 'none' }}
          />
          <HStack justifyContent={'center'} gap={'12'} paddingTop={'4'}>
            <PreviousButton step={step} setStep={setStep} />
            <NextButton />
          </HStack>
        </VStack>

        <Image // to replace with google maps
          src={'./images/map.webp'}
          height={'100%'}
          width={'600px'}
          rounded={'8px'}
          fit={'cover'}
          display={{ base: 'none', md: 'block' }}
        />
      </HStack>
    </>
  );
};

export default RouteDetails;
