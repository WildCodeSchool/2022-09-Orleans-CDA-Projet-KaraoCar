import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PreviousButton from './components/PreviousButton';
import { IoCarSportSharp } from 'react-icons/io5';
import { MusicalStyle } from '@libs/typings';
import backgroundImage from '../../assets/undraw_comment_background.svg';

const Comment = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const {
    register,
    formState: { isDirty, isValid },
  } = useFormContext();
  const isSubmitting = useFormContext().formState.isSubmitting;
  const errors = useFormContext().formState.errors;
  const [musicalStyles, setMusicalStyles] = useState<MusicalStyle[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchMusicalStyles = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_HOST + 'api/musical-styles',
          {
            signal: abortController.signal,
          }
        );
        const data = await response.json();
        setMusicalStyles(data);
      } catch (error) {}
    };

    fetchMusicalStyles();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <VStack
      width={{ base: '320px', md: '420px', lg: '800px' }}
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      marginTop={{ base: '0', md: '6' }}
      justifyContent={'center'}
      gap={'4'}
      marginBottom={'6'}
    >
      <FormControl isInvalid={Boolean(errors.musicalStyles)} id="musicalStyles">
        <FormLabel
          htmlFor="musicalStyles"
          fontSize={{ base: '18', md: '24' }}
          textAlign={'center'}
          fontWeight={'regular'}
          marginBottom={'6'}
        >
          {'Musical styles'}
        </FormLabel>
        <Stack
          spacing={5}
          direction={{ base: 'column', md: 'row' }}
          justifyContent={'center'}
        >
          {musicalStyles.map((style) => (
            <Checkbox
              size={'lg'}
              key={style.id}
              value={style.id}
              id={'musicalStyle' + style.id}
              {...register('musicalStyles', {
                required: 'Please select at least one musical style',
              })}
            >
              {style.name}
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
          {'Anything to add about your ride?'}
        </FormLabel>
        <Textarea
          border={'2px solid slateblue'}
          height={{ base: '140px', md: '240px' }}
          id="comment"
          placeholder="Cats are welcome!"
          fontSize={{ base: '16', md: '20' }}
          fontWeight={'light'}
          backgroundColor={'#FEFEFE'}
          {...register('comment', {
            setValueAs: (value) => value.trim(),
          })}
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
          backgroundColor={'slateblue'}
          colorScheme={'blue'}
          color={'white'}
          isLoading={isSubmitting}
          type="submit"
          fontSize={{ base: '18', md: '22' }}
          shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
          rightIcon={<IoCarSportSharp size={'24'} />}
          gap={{ base: '0', md: '4' }}
          disabled={!isDirty || !isValid}
        >
          {'Publish'}
        </Button>
      </HStack>
      <Image
        display={{ base: 'none', lg: 'block' }}
        position={'absolute'}
        bottom={'0'}
        left={'00'}
        zIndex={'-100'}
        src={backgroundImage}
      />
    </VStack>
  );
};

export default Comment;
