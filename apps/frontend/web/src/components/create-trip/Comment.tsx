import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CommentBackground from './components/CommentBackground';
import PreviousButton from './components/PreviousButton';

const Comment = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const { register, setValue } = useFormContext();
  const isSubmitting = useFormContext().formState.isSubmitting;
  const errors = useFormContext().formState.errors;
  const [musicalStyles, setMusicalStyles] = useState([
    'Rock',
    'Pop',
    'Jazz',
    'Hip Hop',
    'Rap',
    'Metal',
  ]);

  return (
    <VStack
      width={{ base: '320px', md: '420px', lg: '800px' }}
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      marginTop={{ base: '0', md: '6' }}
      justifyContent={'center'}
      gap={{ base: '4', md: '4' }}
      marginBottom={{ base: '6', md: '0' }}
    >
      <FormControl isInvalid={Boolean(errors.musicalStyles)} id="musicalStyles">
        <FormLabel
          htmlFor="musicalStyles"
          fontSize={{ base: '18', md: '24' }}
          textAlign={'center'}
          fontWeight={'regular'}
          marginBottom={'6'}
        >
          Musical styles
        </FormLabel>
        <Stack
          spacing={5}
          direction={{ base: 'column', md: 'row' }}
          justifyContent={'center'}
        >
          {musicalStyles.map((style, index) => (
            <Checkbox
              size={'lg'}
              colorScheme="slateblue"
              value={index}
              key={index}
              {...register('musicalStyles', {})}
            >
              {style}
            </Checkbox>
          ))}
        </Stack>
        <FormErrorMessage justifyContent={'center'}>
          {errors?.musicalStyles && errors.musicalStyles.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.comment)}>
        <FormLabel
          htmlFor="comment"
          fontSize={{ base: '18', md: '24' }}
          textAlign={'center'}
          fontWeight={'regular'}
          marginTop={{ base: '6', md: '20' }}
        >
          Anything to add about your ride?
        </FormLabel>
        <Textarea
          border={'2px solid #394E61'}
          height={{ base: '140px', md: '240px' }}
          id="comment"
          placeholder="Cats are welcome!"
          fontSize={{ base: '16', md: '20' }}
          fontWeight={'light'}
          backgroundColor={'#FEFEFE'}
          {...register('comment', {})}
        />
        <FormErrorMessage>
          {errors.comment && errors.comment.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <HStack gap={'12'}>
        <PreviousButton step={step} setStep={setStep} />
        <Button
          width={{ base: '125px', md: '200px' }}
          height={{ base: '50px', md: '60px' }}
          backgroundColor={'#394E61'}
          colorScheme={'blue'}
          color={'white'}
          isLoading={isSubmitting}
          type="submit"
          fontSize={{ base: '18', md: '24' }}
          shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
        >
          Publish ride
        </Button>
      </HStack>
      <Box
        display={{ base: 'none', lg: 'block' }}
        position={'absolute'}
        bottom={'0'}
        left={'00'}
        zIndex={'-100'}
      >
        <CommentBackground />
      </Box>
    </VStack>
  );
};

export default Comment;
