import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiCar } from 'react-icons/bi';
import { BsCheckSquare, BsGeoFill, BsMusicNoteList, BsSignpostFill } from 'react-icons/bs';
import { GiSteeringWheel } from 'react-icons/gi';
import { HiOutlineCake, HiOutlineUsers } from 'react-icons/hi';
import { MdFormatListBulleted, MdOutlineDescription } from 'react-icons/md';

const TripList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log('TripList');
  }, []);



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
                  <Button size={'sm'} rightIcon={<MdFormatListBulleted />} onClick={onOpen}>
                    Details
                  </Button>

                  <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader bgColor={'#394E61'}
                        color={'#FFFFFF'}
                        borderTopRadius={'md'}>
                          <Flex direction={'row'} justify={'space-between'}>
                            <Flex>To Blois</Flex>
                            <Flex mr={16}>{'15H15 -> 17H15'}</Flex>
                            <Flex></Flex>
                          </Flex>
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Flex>
                          <Flex direction={'column'} w={'100%'} p={6} align={'center'}>
                            <Img src={'../../../public/images/undraw_by_my_car_gicy.svg'} />
                            <Flex mt={'4'}>
                              <Text as='b' fontSize={'lg'}>Car model</Text>
                              
                            </Flex>
                            <Flex>
                              <Flex mt={'1'}><BiCar/></Flex><Text ml={'1'} mr={'1'} as='b'>Type:</Text>type 
                              <Flex mt={'1'} ml={'4'}><BiCar/></Flex><Text ml={'1'} mr={'1'} as='b'>Model:</Text> model 
                              
                            </Flex>

                          </Flex>
                          <Flex direction={'column'} p={4} w={'50%'}>
                            <Image
                              borderRadius='full'
                              boxSize='150px'
                              src='../../../public/images/profile-placeholder.png'                       />
                          </Flex>

                          <Flex direction={'column'} w={'100%'}>
                            <Flex direction={'row'}>
                              <Flex p={2} mt={'2'}><GiSteeringWheel size={'30'}/></Flex>
                              <Flex p={2} mt={'2'} direction={'column'}>
                                <Flex>
                                  <Text as='b'>Name Surname</Text>
                                </Flex>
                                <Flex align={'center'}>
                                  <AiFillStar color="#FDBC4B" />
                                  <AiFillStar color="#FDBC4B" />
                                  <AiFillStar color="#FDBC4B" />
                                  <AiFillStar color="#FDBC4B" />
                                  <AiOutlineStar color="#FDBC4B" />
                                  <Text ml={'2'}>0 vote</Text>
                                </Flex>

                              </Flex>
                            </Flex> 

                            <Flex direction={'row'}>
                              <Flex p={2} mt={'2'}><HiOutlineCake size={'30'}/></Flex>
                              <Flex p={2} mt={'2'} direction={'column'}>
                                <Flex mt={'1'}>
                                  00 years old
                                </Flex>
                              </Flex>
                            </Flex> 

                            <Flex direction={'row'}>
                              <Flex p={2} mt={'2'}><MdOutlineDescription size={'30'}/></Flex>
                              <Flex p={2} mt={'2'} direction={'column'}>
                                <Flex mt={'1'}>
                                  Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit accusamus possimus cupiditate tenetur illo quae, cumque eveniet quo perferendis laborum ex. Minus quod saepe, labore ex ut corporis vero! Impedit?
                                </Flex>
                              </Flex>
                            </Flex>

                          </Flex>
                  
                        </Flex>
                        <Flex p={'4'} align={'center'}>
                          <Flex w={'50%'}>
                            <Img src={'../../../public/images/undraw_map_dark_re_36sy.svg'}  />

                          </Flex>
                          <Flex p={'4'} direction={'column'}>
                            <Flex>
                              <Flex mr={'2'} mt={'1'}><BsGeoFill />
                              </Flex>
                              <Flex>
                                3 avenue du champ de Mars, 45 000 ORLEANS
                              </Flex>
                            </Flex>
                            <Flex>
                              <Flex mr={'2'} align={'center'} mt={'1'} justify={'center'} w={'16px'}>
                              <Divider
                                orientation="vertical"
                                borderWidth="md"
                                borderColor={'#87B8E6'}
                              />
                              </Flex>
                              <Flex direction={'column'}>
                                <Flex mt={'2'}>
                                  <Flex mt={'1'}><BsMusicNoteList /></Flex><Flex ml={'2'}>Music: </Flex>
                                </Flex>
                                <Flex mt={'2'}>
                                  <Flex mt={'1'}><HiOutlineUsers /> </Flex><Flex ml={'2'}>Passengers: No middleseat</Flex>
                                </Flex>
                                <Flex my={'2'} p={'4'}>
                                  <Flex direction={'column'} align={'center'} p={'2'}>
                                    <Image
                                      borderRadius="full"
                                      boxSize="60px"
                                      src="../../../public/images/profile-placeholder.png"
                                    />
                                    <Text fontSize={'sm'}>name s.</Text>
                                  </Flex>
                                  <Flex direction={'column'} align={'center'} p={'2'}>
                                    <Image
                                      borderRadius="full"
                                      boxSize="60px"
                                      src="../../../public/images/profile-placeholder.png"
                                    />
                                    <Text fontSize={'sm'}>name s.</Text>
                                  </Flex>
                                  <Flex direction={'column'} align={'center'} p={'2'}>
                                    <Image
                                      borderRadius="full"
                                      boxSize="60px"
                                      src="../../../public/images/profile-placeholder.png"
                                    />
                                    <Text fontSize={'sm'}>name s.</Text>
                                  </Flex>
                                  
                                </Flex>
                                
                              </Flex>
                            </Flex>
                            <Flex>
                              <Flex mr={'2'} mt={'1'}><BsSignpostFill />
                              </Flex>
                              <Flex>
                                20 place de la République, 41 000 BLOIS
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                      </ModalBody>

                      <Center>
                        <ModalFooter>
                          <Button onClick={onClose}>
                            <Flex mr={'2'}>Book trip </Flex><BsCheckSquare />
                          </Button>
                        </ModalFooter>
                      </Center>
                    </ModalContent>
                  </Modal>

                  
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
