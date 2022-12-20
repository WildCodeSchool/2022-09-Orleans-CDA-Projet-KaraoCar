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

const RouteDetails = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const { control } = useFormContext();
  const errors = useFormContext().formState.errors;
  const isSubmitting = useFormContext().formState.isSubmitting;

  return (
    <>
      <FormControl
        isInvalid={Boolean(errors.itineraryUrl)}
        width={{ base: '320px', md: '420px', lg: '500px' }}
        id="itineraryUrl"
        height={{ base: '100%', md: '75%' }}
        display={'flex'}
        gap={{ base: '6', md: '4' }}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <FormLabel
          htmlFor="itineraryUrl"
          fontSize={{ base: '18', md: '32' }}
          textAlign={'start'}
          fontWeight={'regular'}
          margin={'0'}
        >
          What is your route?
        </FormLabel>
        <Controller
          name="itineraryUrl"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Stack>
                <Radio
                  size={'lg'}
                  value="1"
                  fontSize={{ base: '18', md: '24' }}
                  fontWeight={'light'}
                  colorScheme={'slateblue'}
                >
                  First
                </Radio>
                <Radio
                  size={'lg'}
                  value="2"
                  fontSize={{ base: '18', md: '24' }}
                  fontWeight={'light'}
                  colorScheme={'slateblue'}
                >
                  Second
                </Radio>
                <Radio
                  size={'lg'}
                  value="3"
                  fontSize={{ base: '18', md: '24' }}
                  fontWeight={'light'}
                  colorScheme={'slateblue'}
                >
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

        <Image // to replace with google maps
          src={'./images/map.webp'}
          height={'75%'}
          rounded={'8px'}
          fit={'cover'}
          display={{ base: 'block', md: 'none' }}
        />
        <HStack justifyContent={'center'} gap={'12'}>
          <Button
            width={{ base: '125px', md: '150px' }}
            height={{ base: '50px', md: '60px' }}
            backgroundColor={'#FEFEFE'}
            colorScheme={'blue'}
            color={'394E61'}
            onClick={() => setStep(step - 1)}
            fontSize={{ base: '18', md: '24' }}
            border={'2px solid #394E61'}
            shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
          >
            Previous
          </Button>
          <Button
            width={{ base: '125px', md: '150px' }}
            height={{ base: '50px', md: '60px' }}
            backgroundColor={'#394E61'}
            colorScheme={'blue'}
            color={'white'}
            isLoading={isSubmitting}
            type="submit"
            fontSize={{ base: '18', md: '24' }}
            shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
          >
            Next
          </Button>
        </HStack>
      </FormControl>
      <Image // to replace with google maps
        src={'./images/map.webp'}
        height={'75%'}
        width={'600px'}
        rounded={'8px'}
        fit={'cover'}
        display={{ base: 'none', md: 'block' }}
      />
    </>
  );
};

export default RouteDetails;
