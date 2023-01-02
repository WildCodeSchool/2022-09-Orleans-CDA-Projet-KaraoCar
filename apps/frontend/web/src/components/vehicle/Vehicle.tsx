import { useState, useEffect } from 'react';
import { Flex, Text, Image, Box, Heading, Button } from '@chakra-ui/react';

interface Car {
  type: string;
  numberPlate: string;
  seats: number;
  year: number;
  color: string;
}

const Vehicle: React.FC = () => {
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://example.com/api/cars/123');
      const data = await response.json();
      setCar(data);
    }
    fetchData();
  }, []);

  //   return <div>Loading...</div>;
  // }

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
              {'SUV'}
            </Text>
            <Text marginBottom={'15px'}>
              Number plate:<br></br> {'23323'}{' '}
            </Text>
            <Text marginBottom={'15px'}>
              Seats: <br></br>
              {'2'}
            </Text>
            <Text marginBottom={'15px'}>
              Year: <br></br>
              {'1995'}
            </Text>
            <Text marginBottom={'15px'}>
              Color:<br></br> {'Blue'}
            </Text>
            <Box position="absolute" bottom="3" right="380">
              <Button variant="outline">Edit</Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Vehicle;

/*{ <Text fontWeight="bold">{car.type}</Text>
        <Text>Number plate: {car.numberPlate}</Text>
        <Text>Seats: {car.seats}</Text>
        <Text>Year: {car.year}</Text>
        <Text>Color: {car.color}</Text> }*/
