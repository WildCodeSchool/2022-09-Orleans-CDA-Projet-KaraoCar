import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form";

const RouteDetails = () => {
  const { register } = useFormContext();
  const  errors  = useFormContext().formState.errors;
  const isSubmitting = useFormContext().formState.isSubmitting;

  return (
    <>
    <FormControl
      isInvalid={Boolean(errors.yolo)}
      marginTop={'18'}
      width={'500px'}
    >
      <FormLabel htmlFor="yolo" fontSize={'24'} textAlign={'center'}>
        Where are you going to?
      </FormLabel>
      <Input
        height={'70px'}
        id="yolo"
        placeholder="Chalet du steak"
        fontSize={'24'}
        {...register('yolo', {
          required: 'This is required',
          minLength: { value: 4, message: 'Minimum length should be 4' },
          validate: (value) => { return !!value.trim()}
        })}
      />
      <FormErrorMessage>
        
        {errors?.yolo && errors.yolo.message?.toString()}
      </FormErrorMessage> 
    </FormControl>
    <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
      Next
    </Button>
  </>
  )
}

export default RouteDetails