import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Img,
  VStack,
} from '@chakra-ui/react';
import SearchBar from '../components/searchbar/SearchBar';
import SearchCriteria from '../interfaces/SearchCriteriaInterface';

const Search = () => {
  const pageName = 'Search for a trip';
  return (
    <>
      <Flex
        bg={'#394E61'}
        color={'white'}
        w={'100%'}
        p={'4'}
        align={'center'}
        justify={'center'}
        display={{ base: 'flex', md: 'none' }}
        fontWeight={'bold'}
      >
        {pageName}
      </Flex>

      <VStack>
        <HStack w={'100%'} display={{ base: 'none', md: 'flex' }}>
          <Flex w={'100%'} padding="24px" m={'10'}>
            <Flex align="center" justify="center" w={'50%'}>
              <Img
                src="../../public/images/undraw_travel_booking.svg"
                w={'50%'}
              />
            </Flex>
            <Flex align="center" w={'50%'}>
              <Heading fontSize={{ md: '4xl', base: 'xl' }}>{pageName}</Heading>
            </Flex>
          </Flex>
        </HStack>

        <SearchBar />
      </VStack>
    </>
  );
};

export default Search;
