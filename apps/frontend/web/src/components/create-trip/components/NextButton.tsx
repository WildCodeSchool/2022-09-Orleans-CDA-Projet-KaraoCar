import { Button, Text } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { BsArrowRightShort } from 'react-icons/bs';

const NextButton = ({
  isValid,
  isDirty,
}: {
  isValid: boolean;
  isDirty: boolean;
}) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Button
      width={{ base: '130px', md: '160px' }}
      height={{ base: '50px', md: '60px' }}
      isLoading={isSubmitting}
      type="submit"
      fontSize={{ base: '18', md: '22' }}
      shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
      gap={'2'}
      disabled={!isValid || !isDirty}
    >
      <Text as={'span'}>{'Next'}</Text>
      <BsArrowRightShort size={'30'} />
    </Button>
  );
};

export default NextButton;
