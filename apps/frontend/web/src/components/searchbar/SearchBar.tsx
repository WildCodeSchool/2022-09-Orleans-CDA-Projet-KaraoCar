import {
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsCalendar3, BsGeoFill, BsPeopleFill } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { HiMusicNote } from 'react-icons/hi';
import { SlDirection } from 'react-icons/sl';
import SearchCriteria from '../../interfaces/SearchCriteriaInterface';
import TripList from '../triplist/TripList';

const SearchBar = (searchCriteria: SearchCriteria) => {
  const today = new Date();
  const defaultDate = new Date(today).toISOString().split('T')[0];
  const [criteria, setCriteria] = useState<SearchCriteria>({});
  const [musicalChoice, setMusicalChoice] = useState<number>(0); //id of the musical choice
  const [nbPassengers, setNbPassengers] = useState<number>(1);
  const [departure, setDeparture] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [dateDeparture, setDateDeparture] = useState<string>();
  const [musicalStyle, setMusicalStyle] = useState<
    { id: number; name: string }[]
  >([]);

  useEffect(() => {
    setDateDeparture(
      searchCriteria?.dateDeparture
        ? searchCriteria?.dateDeparture
        : defaultDate
    );

    setCriteria({
      departure: searchCriteria?.departure ? searchCriteria?.departure : '',
      destination: searchCriteria?.destination
        ? searchCriteria?.destination
        : '',
      dateDeparture: searchCriteria?.dateDeparture
        ? searchCriteria?.dateDeparture
        : defaultDate,
      musicalChoice: searchCriteria?.musicalChoice
        ? {
            id: searchCriteria?.musicalChoice?.id,
            name: searchCriteria?.musicalChoice?.name,
          }
        : { id: 0, name: '' },
      nbPassengers: searchCriteria?.nbPassengers
        ? searchCriteria?.nbPassengers
        : 1,
    });

    const musicalStyle = [
      { id: 1, name: 'Rock' },
      { id: 2, name: 'Pop' },
      { id: 3, name: 'Rap' },
      { id: 4, name: 'RnB' },
      { id: 5, name: 'Jazz' },
      { id: 6, name: 'Classique' },
      { id: 7, name: 'Electro' },
      { id: 8, name: 'Metal' },
      { id: 9, name: 'Funk' },
      { id: 10, name: 'Reggae' },
      { id: 11, name: 'Soul' },
      { id: 12, name: 'Blues' },
      { id: 13, name: 'Country' },
      { id: 14, name: 'Folk' },
      { id: 15, name: 'Indie' },
      { id: 16, name: 'Hip-Hop' },
      { id: 17, name: 'Techno' },
      { id: 18, name: 'Disco' },
      { id: 19, name: 'House' },
      { id: 20, name: 'Ska' },
      { id: 21, name: 'Punk' },
      { id: 22, name: 'Soul' },
    ];
    setMusicalStyle(musicalStyle);
  }, []);

  useEffect(() => {
    console.log(criteria);
  }, [criteria]);

  const handleSearch = (e: Event) => {
    e.preventDefault();
    setCriteria({
      departure: departure,
      destination: destination,
      dateDeparture: dateDeparture,
      musicalChoice: musicalChoice
        ? {
            id: musicalChoice,
            name: musicalStyle.find((style) => style.id === musicalChoice)
              ?.name,
          }
        : { id: 0, name: '' },
      nbPassengers: nbPassengers,
    });
  };

  return (
    <>
      <HStack w={'70%'} shadow={'md'}>
        <Center>
          <FormControl>
            <HStack>
              <Flex width={'40%'}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsGeoFill color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Departure"
                    variant="flushed"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                  />
                </InputGroup>
              </Flex>

              <Center height="40px">
                <Divider
                  orientation="vertical"
                  borderWidth="md"
                  borderColor={'#87B8E6'}
                />
              </Center>

              <Flex width={'40%'}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SlDirection color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Destination"
                    variant="flushed"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </InputGroup>
              </Flex>

              <Center height="40px">
                <Divider
                  orientation="vertical"
                  borderWidth="md"
                  borderColor={'#87B8E6'}
                />
              </Center>

              <Flex width={'40%'}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsCalendar3 color="gray.300" />}
                  />
                  <Input
                    type="date"
                    variant="flushed"
                    defaultValue={dateDeparture ? dateDeparture : defaultDate}
                    onChange={(e) => setDateDeparture(e.target.value)}
                  />
                </InputGroup>
              </Flex>

              <Center height="40px">
                <Divider
                  orientation="vertical"
                  borderWidth="md"
                  borderColor={'#87B8E6'}
                />
              </Center>

              <Flex width={'150px'}>
                <BsPeopleFill size={40} />

                <NumberInput
                  defaultValue={nbPassengers}
                  min={1}
                  max={5}
                  variant={'flushed'}
                  ml={'3'}
                  onChange={(value) => setNbPassengers(+value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>

              <Center height="40px">
                <Divider orientation="vertical" borderColor={'#87B8E6'} />
              </Center>
              <HiMusicNote size={40} />
              <Flex w="40%">
                <Select
                  placeholder={'Music'}
                  variant="unstyled"
                  onChange={(e) => setMusicalChoice(+e.target.value)}
                >
                  {musicalStyle?.map((style) => (
                    <option key={style?.id} value={style?.id}>
                      {style?.name}
                    </option>
                  ))}
                </Select>
              </Flex>

              <Button
                leftIcon={<GoSearch />}
                type="submit"
                isLoading={false}
                loadingText="Loading"
                w={'250px'}
                onClick={handleSearch}
              >
                Search
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </HStack>

      <TripList />
    </>
  );
};

export default SearchBar;
