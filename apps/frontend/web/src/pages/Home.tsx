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
        {/* WIP: It's made in an another US <SearchBar /> Replace the placeholder below*/}
        <Box
          position={'absolute'}
          top={{base: 'calc(311px + 80px + 75px - 150px)', lg: 'calc(622px + 80px - 27px)'}}
          left={'0'}
          right={'0'}
          margin={'auto'}
          h={{base: '300px' , lg: '55px'}}
          w={{base: '80%' , lg: '70%'}}
          backgroundColor={'#FFFFFF'}
          borderRadius={'6'}
          shadow={'md'}
        ></Box>
    </>
  );
};

export default Home;
