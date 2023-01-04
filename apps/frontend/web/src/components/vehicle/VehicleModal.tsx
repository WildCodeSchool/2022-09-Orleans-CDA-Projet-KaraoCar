import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
  Box,
  Image,
} from '@chakra-ui/react';
import { ImBin } from 'react-icons/im';
import { FaRegEdit } from 'react-icons/fa';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent paddingTop={'50px'} maxW="800px">
        <ModalCloseButton />
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image src="/images/modalvehicle.svg" width={'100px'} />
          <Heading>Edit a Vehicle</Heading>
        </Box>
        <Box display="flex" justifyContent="center">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel marginTop="0.5rem">Brand</FormLabel>
              <Input width={'600px'} placeholder={'Jeep'} type="text" />
            </FormControl>
            <FormControl>
              <FormLabel marginTop="0.5rem">Model</FormLabel>
              <Input width={'600px'} placeholder={'Cherokee'} type="text" />
            </FormControl>
            <FormControl>
              <FormLabel marginTop="0.5rem">Type</FormLabel>
              <Select width={'600px'} name="type">
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="truck">Truck</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel marginTop={'0.5rem'}>PlateNumber</FormLabel>
              <Input width={'600px'} placeholder={'AS0423'} type="text" />
            </FormControl>
            <FormControl>
              <FormLabel marginTop="0.5rem">Seats</FormLabel>
              <Input width={'600px'} placeholder={'4'} type="text" />
            </FormControl>
            <FormControl>
              <FormLabel marginTop="0.5rem">Year</FormLabel>
              <Input width={'600px'} type="date" />
            </FormControl>
            <FormControl>
              <FormLabel marginTop="0.5rem">Color</FormLabel>
              <Input width={'600px'}placeholder={'Blue'} type="text" />
            </FormControl>
            <FormLabel marginTop="1rem">Image</FormLabel>
            <Input width={'50%'} type="file"></Input>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              marginTop={'1rem'}
              marginBottom={'2rem'}
            >
              <Button
                type="submit"
                rightIcon={<ImBin size={'20px'} />}
                backgroundColor="#981039"
              >
                Delete
              </Button>
              <Button type="submit" rightIcon={<FaRegEdit size={'20px'} />}>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
