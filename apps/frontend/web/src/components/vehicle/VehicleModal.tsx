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
      <ModalOverlay/>
      <ModalContent paddingTop={'50px'} maxW='800px'>
        <ModalCloseButton />
        <Box display="flex" justifyContent="center" alignItems="center">
      <Box display="flex" alignItems="center">
        <Image src="/images/modalvehicle.svg" width={'100px'} marginRight={'60px'} />
        <Heading>Edit a Vehicle</Heading>
      </Box>
    </Box>

        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="plateNumber" >PlateNumber</FormLabel>
            <Input id="plateNumber" name="plateNumber" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="brand">Brand</FormLabel>
            <Input id="brand" name="brand" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="model">Model</FormLabel>
            <Input id="model" name="model" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="type">Type</FormLabel>
            <Select id="type" name="type">
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="color">Color</FormLabel>
            <Input id="color" name="color" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="year">Year</FormLabel>
            <Input id="year" name="year" type="date" />
          </FormControl>
          <Button type="submit" variant="blue">
            Submit
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
