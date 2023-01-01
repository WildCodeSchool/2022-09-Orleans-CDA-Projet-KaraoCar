import { Box, Center, Heading, HStack, VStack } from "@chakra-ui/react"

import SearchBar from "../theme/components/searchBar";

const Search = () => {
  

  return (
    <VStack spacing='24px' padding='24px'>
      <HStack>
        <Box w={'100%'} padding='24px'>
            <Center>
              <Heading fontSize='xl'>Search for a trip</Heading>
            </Center>
        </Box>
      </HStack>
      
      <SearchBar />

    </VStack>
  )
}

export default Search
