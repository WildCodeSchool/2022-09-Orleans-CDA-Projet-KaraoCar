import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Controller, useForm, useFormContext } from 'react-hook-form';

const MusicalStyles = ({
  musicalStyles,
  setMusicalStyles,
}: {
  musicalStyles: string[];
  setMusicalStyles: Dispatch<SetStateAction<string[]>>;
}) => {
  const isSubmitting = useFormContext().formState.isSubmitting;
  const { register, setValue } = useFormContext();
  const errors = useFormContext().formState.errors;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const methods = useForm();

  return (
    <>
      <Button
        onClick={onOpen}
        width={{ base: '150px', md: '200px' }}
        height={{ base: '50px', md: '60px' }}
        backgroundColor={'#FEFEFE'}
        colorScheme={'blue'}
        color={'394E61'}
        fontSize={{ base: '18', md: '24' }}
        border={'2px solid #394E61'}
        shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
      >
        Musical Styles
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pick your style(s)!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>            
          </ModalBody>
          <ModalFooter>
            <Button
              width={{ base: '125px', md: '150px' }}
              height={{ base: '50px', md: '60px' }}
              backgroundColor={'#394E61'}
              colorScheme={'blue'}
              color={'white'}
              isLoading={isSubmitting}
              type="submit"
              form="musicalStyles"
              fontSize={{ base: '18', md: '24' }}
              shadow={'0px 2px 2px rgba(0, 0, 0, 0.25)'}
            >
              Next
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MusicalStyles;
