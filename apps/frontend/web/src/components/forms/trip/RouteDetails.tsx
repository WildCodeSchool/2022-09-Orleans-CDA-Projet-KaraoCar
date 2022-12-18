import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  Stack,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

const RouteDetails = () => {
  const { register } = useFormContext();
  const errors = useFormContext().formState.errors;
  const isSubmitting = useFormContext().formState.isSubmitting;

  return (
    <>
      <FormControl
        isInvalid={Boolean(errors.yolo)}
        marginTop={'18'}
        width={'500px'}
      >
        <FormLabel htmlFor="yolo" fontSize={'24'} textAlign={'center'}>
          What is your route?
        </FormLabel>
        <Stack>
          <Radio size="lg" name="1" colorScheme="#394E61">
            Radio
          </Radio>
          <Radio size="lg" name="2" colorScheme="#394E61">
            Radio
          </Radio>
          <Radio size="lg" name="3" colorScheme="#394E61">
            Radio
          </Radio>
        </Stack>
        <FormErrorMessage>
          {errors?.yolo && errors.yolo.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Next
      </Button>
    </>
  );
};

export default RouteDetails;
