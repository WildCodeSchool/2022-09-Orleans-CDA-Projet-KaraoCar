import { Box, Flex, Text, VStack } from '@chakra-ui/react';

const Stepper = ({ step }: { step: number }) => {
  return (
    <>
      <Flex width={'100%'} alignItems={'center'} justifyContent={'center'}>
        <VStack
          boxSize={{ base: '8', md: '12' }}
          bgColor={step >= 1 ? '#394E61' : 'white'}
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
        {step > 1 ? (
          <Box
            width={{ base: '70px', lg: '120px' }}
            zIndex={'-1'}
            height={'3px'}
            backgroundColor={`${step > 1 && '#394E61'}`}
          ></Box>
        ) : (
          <Box
            width={{ base: '70px', lg: '120px' }}
            zIndex={'-1'}
            height={'1px'}
            backgroundColor={'#384E61'}
          ></Box>
        )}

        <VStack
          boxSize={{ base: '8', md: '12' }}
          bgColor={step >= 2 ? '#394E61' : 'white'}
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
        {step > 2 ? (
          <Box
            width={{ base: '70px', lg: '120px' }}
            zIndex={'-1'}
            height={'3px'}
            backgroundColor={`${step > 2 && '#394E61'}`}
          ></Box>
        ) : (
          <Box
            width={{ base: '70px', lg: '120px' }}
            zIndex={'-1'}
            height={'1px'}
            backgroundColor={'#384E61'}
          ></Box>
        )}

        <VStack
          boxSize={{ base: '8', md: '12' }}
          bgColor={step >= 3 ? '#394E61' : 'white'}
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
        {step > 3 ? (
          <Box
            width={{ base: '70px', lg: '120px' }}
            zIndex={'-1'}
            height={'3px'}
            backgroundColor={`${step > 3 && '#394E61'}`}
          ></Box>
        ) : (
          <Box
            width={{ base: '70px', lg: '120px' }}
            zIndex={'-1'}
            height={'1px'}
            backgroundColor={'#384E61'}
          ></Box>
        )}
        <VStack
          boxSize={{ base: '8', md: '12' }}
          bgColor={step >= 4 ? '#394E61' : 'white'}
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
