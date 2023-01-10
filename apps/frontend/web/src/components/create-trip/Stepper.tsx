import { Box, Flex, Text, VStack } from '@chakra-ui/react';

const Stepper = ({ step }: { step: number }) => {
  return (
    <>
      <Flex width={'100%'} alignItems={'center'} justifyContent={'center'}>
        <VStack
          boxSize={{ base: '8', md: '12' }}
          bgColor={step >= 1 ? 'slateblue' : 'white'}
          rounded={'100%'}
          justifyContent={'center'}
          border={'2px solid #8E8E8E'}
        >
          <Text
            color={step >= 1 ? 'white' : '#838383'}
            fontSize={{ base: 'md', md: 'xl' }}
            fontWeight={'bold'}
          >
            {'1'}
          </Text>
        </VStack>
        <Box
          width={{ base: '70px', lg: '120px' }}
          zIndex={'-1'}
          height={step > 1 ? '3px' : '1px'}
          backgroundColor={step > 1 ? 'slateblue' : '#8E8E8E'}
        ></Box>
        <VStack
          boxSize={{ base: '8', md: '12' }}
          bgColor={step >= 2 ? 'slateblue' : 'white'}
          rounded={'100%'}
          justifyContent={'center'}
          border={'2px solid #8E8E8E'}
          marginLeft={'0'}
        >
          <Text
            color={step >= 2 ? 'white' : '#838383'}
            fontSize={{ base: 'md', md: 'xl' }}
            fontWeight={'bold'}
          >
            {'2'}
          </Text>
        </VStack>
        <Box
          width={{ base: '70px', lg: '120px' }}
          zIndex={'-1'}
          height={step > 2 ? '3px' : '1px'}
          backgroundColor={step > 2 ? 'slateblue' : '#8E8E8E'}
        ></Box>

        <VStack
          boxSize={{ base: '8', md: '12' }}
          bgColor={step >= 3 ? 'slateblue' : 'white'}
          rounded={'100%'}
          justifyContent={'center'}
          border={'2px solid #8E8E8E'}
          marginLeft={'0'}
        >
          <Text
            color={step >= 3 ? 'white' : '#838383'}
            fontSize={{ base: 'md', md: 'xl' }}
            fontWeight={'bold'}
          >
            {'3'}
          </Text>
        </VStack>
        <Box
          width={{ base: '70px', lg: '120px' }}
          zIndex={'-1'}
          height={step > 3 ? '3px' : '1px'}
          backgroundColor={step > 3 ? 'slateblue' : '#8E8E8E'}
        ></Box>
        <VStack
          boxSize={{ base: '8', md: '12' }}
          bgColor={step >= 4 ? 'slateblue' : 'white'}
          rounded={'100%'}
          justifyContent={'center'}
          border={'2px solid #8E8E8E'}
          marginLeft={'0'}
        >
          <Text
            color={step >= 4 ? 'white' : '#838383'}
            fontSize={{ base: 'md', md: 'xl' }}
            fontWeight={'bold'}
          >
            {'4'}
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Stepper;
