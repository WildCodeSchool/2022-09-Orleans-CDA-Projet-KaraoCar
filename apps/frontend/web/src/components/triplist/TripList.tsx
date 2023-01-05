import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Img,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiCar } from 'react-icons/bi';
import { BsGeoFill, BsSignpostFill } from 'react-icons/bs';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdFormatListBulleted } from 'react-icons/md';

const TripList = () => {
  return (
    <Flex w={'70%'}>
      <Stack spacing="10" w={'100%'}>
        <Card variant={'elevated'}>
          <CardHeader
            bgColor={'#87B8E6'}
            color={'#FFFFFF'}
            borderTopRadius={'md'}
          >
            <Heading size={'sm'}>
              <Grid templateColumns="repeat(7, 1fr)" gap={4}>
                <GridItem w="100%">
                  <Flex align={'center'} h={'100%'}>
                    06:50 am
                  </Flex>
                </GridItem>
                <GridItem w="100%">
                  <Flex align={'center'} h={'100%'}>
                    09:50 am
                  </Flex>
                </GridItem>
                <GridItem w="100%" display={'inline-flex'}>
                  <Spacer />
                  <Img src={'../../../public/images/seat.svg'} w={'14px'} />
                  <Spacer />
                  <Img src={'../../../public/images/seat.svg'} w={'14px'} />
                  <Spacer />
                  <Img src={'../../../public/images/seat.svg'} w={'14px'} />
                  <Spacer />
                </GridItem>
                <GridItem w="100%">
                  <Flex align={'center'} h={'100%'}>
                    Rock, Rap
                  </Flex>
                </GridItem>
                <GridItem w="100%">
                  <Flex align={'center'} h={'100%'}>
                    10£
                  </Flex>
                </GridItem>
                <GridItem w="100%">
                  <Flex align={'center'} h={'100%'}>
                    <Image
                      borderRadius="full"
                      boxSize="30px"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </Flex>
                </GridItem>
                <GridItem w="100%">
                  <Flex justify={'center'}>
                    <AiFillStar color="#FDBC4B" />
                    <AiFillStar color="#FDBC4B" />
                    <AiFillStar color="#FDBC4B" />
                    <AiFillStar color="#FDBC4B" />
                    <AiOutlineStar color="#FDBC4B" />
                  </Flex>
                  <Flex justify={'center'} fontSize={'sm'}>
                    50 votes
                  </Flex>
                </GridItem>
              </Grid>
            </Heading>
          </CardHeader>
          <CardBody>
            <Grid
              h="150px"
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(12, 1fr)"
              gap={2}
            >
              <GridItem rowSpan={4} colSpan={1}>
                <Flex
                  direction={'column'}
                  justify={'space-between'}
                  h={'100%'}
                  align={'center'}
                >
                  <Flex justifyContent={'center'} p={'2'}>
                    <BsGeoFill />
                  </Flex>
                  <Divider
                    orientation="vertical"
                    borderWidth="md"
                    borderColor={'#000000'}
                  />
                  <Flex justifyContent={'center'} p={'2'}>
                    <BsSignpostFill />
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem colSpan={11}>
                <Flex align={'center'} h={'100%'}>
                  3 avenue du champ de Mars, 45 000 ORLEANS
                </Flex>
              </GridItem>
              <GridItem colSpan={11}>
                <Flex align={'center'} h={'100%'}>
                  <GiSteeringWheel />
                  &nbsp;Johnny covoit’
                </Flex>
              </GridItem>
              <GridItem colSpan={11}>
                <Flex align={'center'} h={'100%'}>
                  <BiCar />
                  &nbsp;Ferrari 812GTS red
                </Flex>
              </GridItem>
              <GridItem colSpan={9}>
                <Flex align={'center'} h={'100%'}>
                  20 place de la République, 41 000 BLOIS
                </Flex>
              </GridItem>
              <GridItem colSpan={2}>
                <Flex align={'center'} h={'100%'} direction={'row-reverse'}>
                  <Button size={'sm'} rightIcon={<MdFormatListBulleted />}>
                    Détails
                  </Button>
                </Flex>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </Stack>
    </Flex>
  );
};

export default TripList;
