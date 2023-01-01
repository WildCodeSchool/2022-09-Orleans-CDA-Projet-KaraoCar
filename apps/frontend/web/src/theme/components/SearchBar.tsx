import { Button, Center, Divider, Flex, FormControl, HStack, Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react"
import { BsCalendar3, BsGeoFill, BsPeopleFill } from "react-icons/bs"
import { GoSearch } from "react-icons/go"
import { HiMusicNote } from "react-icons/hi"
import { SlDirection } from "react-icons/sl"


const SearchBar = () => {
    const today = new Date();
    const defaultDate = new Date(today).toISOString().split('T')[0];

  return (
    <>
        <HStack w={'70%'} shadow={'md'}>
        <Center>
          <FormControl>
            <HStack>
              <Flex width={'40%'}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<BsGeoFill color='gray.300' />}
                  />
                  <Input type='text' placeholder='Departure' variant='flushed' />
                </InputGroup>
              </Flex>

              <Center height='40px'>
                <Divider orientation='vertical' borderWidth='md' borderColor={'#87B8E6'} />
              </Center>

              <Flex width={'40%'}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<SlDirection color='gray.300' />}
                  />
                  <Input type='text' placeholder='Destination' variant='flushed'/>
                </InputGroup>
              </Flex>

              <Center height='40px'>
                <Divider orientation='vertical' borderWidth='md' borderColor={'#87B8E6'} />
              </Center>

              <Flex width={'40%'}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<BsCalendar3 color='gray.300' />}
                  />
                  <Input type='date' defaultValue={defaultDate} variant='flushed'/>
                </InputGroup>
              </Flex>

              <Center height='40px'>
                <Divider orientation='vertical' borderWidth='md' borderColor={'#87B8E6'} />
              </Center>

              <Flex width={'15%'}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<BsPeopleFill color='gray.300' />}
                  />
                  <Input type='number' placeholder='0' variant='flushed' />
                </InputGroup>
              </Flex>
            
              <Center height='40px'>
                <Divider orientation='vertical' borderColor={'#87B8E6'} />
              </Center>
              <HiMusicNote size={40}/>
              <Flex w='40%'>
                
                <Select placeholder={'Music'} variant='unstyled'>
                  <option value='Dance'>Dance</option>
                  <option value='Hip_Hop'>Hip hop</option>
                  <option value='Heavy_metal'>Heavy metal</option>
                </Select>
              </Flex>  
              
              <Button 
                leftIcon={<GoSearch />} 
                type='submit' 
                width='500px' 
                isLoading={false} 
                loadingText='Loading'
              >
                Search
              </Button>

            </HStack>
          </FormControl>
        </Center>
      </HStack>
    </>
  )
}

export default SearchBar
