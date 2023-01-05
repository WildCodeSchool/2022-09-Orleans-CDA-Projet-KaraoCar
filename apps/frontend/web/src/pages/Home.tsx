import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import EnvironmentSvg from '../assets/undraw_environment.svg';
import SavingsSvg from '../assets/undraw_saving.svg';
import FeedBackSvg from '../assets/undraw_feedback.svg';

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
      w={{ base: '80%', lg: '30%' }}
      justifyContent={'stretch'}
      marginInline={'24px'}
      marginBlock={'48px'}
    >
      <Flex gap={'5'} flexGrow={'1'}>
        <Image
          src={image}
          w={'40%'}
          h={'80%'}
          maxH={'150px'}
          alt={'card image'}
          alignSelf={'end'}
          objectFit={'contain'}
        />
        <Flex
          paddingInlineStart={'10px'}
          flexDirection={'column'}
        >
          <Heading size="lg" as={'h1'} marginBlockEnd={'20px'}>
            {title}
          </Heading>
          <Text>{bodyText}</Text>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'} justifyContent={'end'}>
        <Text
          paddingBlock={'15px'}
          borderBottom={{ base: 'none', lg: '1px solid #000000' }}
        >
          {footerText}
        </Text>
      </Flex>
    </Flex>
  );
};

const ColumnCard = ({
  imgSrc,
  headingText,
  descText,
}: {
  imgSrc: string;
  headingText: string;
  descText: string;
}) => {
  return (
    <Card w={{ base: '100%', lg: '30%' }}>
      <CardBody
        p={'0'}
        border={'1px solid #AAAAAA'}
        borderTopRadius={'md'}
        shadow={'xl'}
      >
        <Image
          src={imgSrc}
          alt={imgSrc}
          borderTopRadius={'md'}
          w={'100%'}
          h={'300px'}
          objectFit={'cover'}
        />
        <Flex
          h={'calc(100% - 300px)'}
          paddingBlock={'20px'}
          flexDirection={'column'}
        >
          <Heading
            size={'center'}
            textAlign={'center'}
            paddingInline={'10px'}
            fontSize={'3xl'}
            flexGrow={'1'}
          >
            {headingText}
          </Heading>
          <Flex marginInline={'24px'} marginBlockStart={'24px'} border={'1px solid #cccccc'} alignItems={'center'}>
            <Text padding={'20px'}>
              {descText}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
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
        textAlign={'center'}
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
        top={{
          base: 'calc(311px + 80px + 75px - 150px)',
          lg: 'calc(622px + 80px - 27px)',
        }}
        left={'0'}
        right={'0'}
        margin={'auto'}
        h={{ base: '300px', lg: '55px' }}
        w={{ base: '80%', lg: '70%' }}
        backgroundColor={'#FFFFFF'}
        borderRadius={'6'}
        shadow={'md'}
      ></Box>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'initial', lg: 'space-around' }}
        alignItems={{ base: 'center', lg: 'initial' }}
        w={'100%'}
        paddingBlock={{ base: '75px', lg: '150px' }}
      >
        <InlineCard
          image={SavingsSvg}
          title={'Save money on gas!'}
          bodyText={
            'A great way to cut expenses on fuel because it allows you to split the cost of a trip with other people who are going the same direction.'
          }
          footerText={
            'By carpooling, you can reduce your fuel consumption and also reduce wear and tear on your vehicle,'
          }
        />
        <Box
          display={{ base: 'block', lg: 'none' }}
          h={'1px'}
          w={'60%'}
          borderBottom={'1px solid #000000'}
        ></Box>
        <InlineCard
          image={EnvironmentSvg}
          title={'Help the planet!'}
          bodyText={
            'When you drive alone in your car, you are using more fuel than you would if you were sharing the trip with other people.'
          }
          footerText={
            'In addition to reducing emissions, carpooling can also help to reduce traffic congestion, which can have a positive impact on air quality and overall quality of life.'
          }
        />
      </Flex>
      <Center
        w={'100%'}
        backgroundColor={'#394E61'}
        color={'#FFFFFF'}
      >
        <Heading size="lg" as={'h1'} marginInline={'24px'} paddingBlock={'28px'}>
          {'Traveling without karaoke will never be the same!'}
        </Heading>
      </Center>
      <Box w={'90%'} m={'auto'} paddingBlock={'48px'}>
        <Flex
          justifyContent={'space-between'}
          w={'100%'}
          paddingBlockEnd={'90px'}
          marginInline={'auto'}
        >
          <Heading size="lg" as={'h1'}>
            {'They’ve adopted it:'}
          </Heading>
          <Image src={FeedBackSvg} h={'130px'} />
        </Flex>
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent={{ base: 'initial', lg: 'space-between' }}
          alignItems={{ base: 'center', lg: 'initial' }}
          gap={'10'}
        >
          <ColumnCard
            imgSrc={'/images/feedback-jean-charles.jpg'}
            headingText={'Jean-Charles: I love singing while travelling'}
            descText={
              'I never thought I\'d find a carpooling website that also lets me sing my heart out, but this one does just that! The karaoke feature is a game changer and makes my commute so much more fun. Highly recommend for all the music lovers out there.'
            }
          />
          <ColumnCard
            imgSrc={'/images/feedback-claudette.jpg'}
            headingText={'Claudette: Best app to meet people!'}
            descText={
              'As a busy college student, Karaocar has been a lifesaver. It\'s so convenient to be able to schedule rides in advance, and I love that I can choose to carpool with people who have similar music taste. Highly recommend!'
            }
          />
          <ColumnCard
            imgSrc={'/images/feedback-brian.jpg'}
            headingText={'Brian: KaraoCar is the best'}
            descText={
              'Not only do I save money on gas, but I also get to have a mini karaoke party on my way to work. So much better than a boring solo commute. Would definitely recommend to others looking for a fun and cost-effective way to travel.'
            }
          />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
