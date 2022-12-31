import { Box, Flex } from '@chakra-ui/react';
const InlineCard = ({
  image,
  title,
  bodyText,
  footerText,
}: {
  image: string;
  title: string;
  bodyText: string;
  footerText: string;
}) => {
  return (
    <Flex
      flexDirection={'column'}
      w={{base: '80%', lg: '30%'}}
      justifyContent={'stretch'}
      marginInline={'24px'}
      marginBlock={'48px'}
    >
      <Flex gap={'5'} flexGrow={'1'}>
        <Image src={image} w={'40%'} h={'80%'} alt={'card image'} alignSelf={'end'} objectFit={'contain'}/>
        <Flex paddingInlineStart={'10px'} flexDirection={'column'} justifyContent={'space-between'}>
          <Heading size="lg" as={'h1'} marginBlockEnd={'20px'}>
            {title}
          </Heading>
          <Text>{bodyText}</Text>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'} justifyContent={'end'}>
        <Text paddingBlock={'15px'} borderBottom={{base: 'none', lg: '1px solid #000000'}}>
          {footerText}
        </Text>
      </Flex>
    </Flex>
  );
};

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
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'initial', lg: 'space-around' }}
        alignItems={{ base: 'center', lg: 'initial' }}
        w={'100%'}
        paddingBlock={{base: '75px', lg: '150px'}}
      >
        <InlineCard
          image={SavingsSvg}
          title={'Save money on gas!'}
          bodyText={
            'Lorem ipsum dolor sit ame consectetur adipiscing elit, sed do adipiscing elit, consectetur adipiscing elit'
          }
          footerText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
          }
        />
        <Box display={{base: 'block', lg: 'none'}} h={'1px'} w={'60%'} borderBottom={'1px solid #000000'}></Box>
        <InlineCard
          image={EnvironmentSvg}
          title={'Help the planet!'}
          bodyText={
            'Lorem ipsum dolor sit ame consectetur adipiscing elit, sed do adipiscing elit, consectetur adipiscing elit'
          }
          footerText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
          }
        />
        
      </Flex>
    </>
  );
};

export default Home;
