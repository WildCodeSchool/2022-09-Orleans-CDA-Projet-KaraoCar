import { Box, Center, Flex, Heading, HStack, Img, VStack } from "@chakra-ui/react"
import SearchBar from "../components/searchbar/SearchBar"


const Search = () => {
  

  return (
    <VStack spacing='24px' padding='24px'>
      <HStack>
        <Flex w={'100%'} padding='24px'>
           
              <Flex align="center" justify="center" w={'50%'}>
                <Img src="../../public/images/undraw_travel_booking.svg" w={'50%'} />
              </Flex>
              <Flex align="center" w={'50%'}>
                <Heading fontSize='xl'>Search for a trip</Heading>
              </Flex>
          
        </Flex>
      </HStack>
      
      <SearchBar />

    </VStack>
  )
}

export default Search
