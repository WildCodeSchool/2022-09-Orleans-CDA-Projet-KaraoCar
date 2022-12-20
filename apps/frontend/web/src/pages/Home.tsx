import { Box, Flex } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Flex
        display={{ lg: 'none', base: 'flex' }}
        justifyContent={'center'}
        paddingBlockStart={'2rem'}
        color={'#000000'}
        fontSize={'2rem'}
        fontWeight={'semibold'}
        backgroundColor={'#91dCEF'}
      >
        {'Give voice to your journeys!'}
      </Flex>
      <Box
        h={'622px'}
        maxW={'1978px'}
        paddingBlockStart={'2.5rem'}
        backgroundImage={'url(/images/header.webp)'}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'right'}
      >
        <Flex
          display={{ lg: 'flex', base: 'none' }}
          w={'fit-content'}
          h={'150px'}
          alignItems={'end'}
          paddingInlineEnd={'5.5rem'}
          paddingInlineStart={'9rem'}
          marginInlineStart={'1.5rem'}
          backgroundImage={'url(/images/cloud.png)'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}
        >
          <Box
            as={'span'}
            color={'#394E61'}
            fontSize={'3rem'}
            fontWeight={'semibold'}
          >
            {'Give voice to your journeys!'}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
