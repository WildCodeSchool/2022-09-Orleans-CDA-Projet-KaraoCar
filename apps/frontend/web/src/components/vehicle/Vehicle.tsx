import React, { useState, useEffect } from 'react';
import { Flex, Text, Image, Box, Heading, Button } from '@chakra-ui/react';
import ModalForm from './VehicleModal';

interface Car {
  type: string;
  numberPlate: string;
  seats: number;
  year: number;
  color: string;
}

const Vehicle: React.FC = () => {
  const [car, setCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://example.com/api/cars/123');
      const data = await response.json();
      setCar(data);
    }
    fetchData();
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={'6rem'}
    >
      <Flex alignItems="center">
        <Image src="/car.png" alt="Car" height={'400px'} width={'400px'} />
        <Box
          rounded={'0px 8px 8px 0px'}
          height={'400px'}
          width={'400px'}
          backgroundColor={'#FAFAFA'}
        >
          <Box marginLeft={'40px'}>
            <Text fontWeight="bold" fontSize={'35px'}>
              Jeep - Cherokee
            </Text>
            <Text marginBottom={'15px'}>
              Type: <br></br>
              {car ? car.type : 'Loading...'}
            </Text>
            <Text marginBottom={'15px'}>
              Number plate:<br></br> {car ? car.numberPlate : 'Loading...'}{' '}
            </Text>
            <Text marginBottom={'15px'}>
              Seats: <br></br>
              {car ? car.seats : 'Loading...'}
            </Text>
            <Text marginBottom={'15px'}>
              Year: <br></br>
              {car ? car.year : 'Loading...'}
            </Text>
            <Text marginBottom={'15px'}>
              Color:<br></br> {car ? car.color : 'Loading...'}
            </Text>
            <Box position="absolute" bottom="3" right="380">
              <Button variant="outline" onClick={toggleModal}>
                Edit
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
      <ModalForm isOpen={isModalOpen} onClose={toggleModal} />
    </Box>
  );
};

export default Vehicle;

/*{ <Text fontWeight="bold">{car.type}</Text>
        <Text>Number plate: {car.numberPlate}</Text>
        <Text>Seats: {car.seats}</Text>
        <Text>Year: {car.year}</Text>
        <Text>Color: {car.color}</Text> }*/
