import { Box, Button, ButtonGroup, Center, Divider, Flex, FormControl, Heading, HStack, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Select, Text, VStack } from "@chakra-ui/react"
import { BsCalendar3, BsGeoFill, BsPeopleFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { SlDirection } from "react-icons/sl";
import { HiMusicNote } from "react-icons/hi";
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
