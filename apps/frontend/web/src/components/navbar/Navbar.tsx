import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  ListItem,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineChat, MdSearch, MdOutlineClose } from 'react-icons/md';
import { BsCaretDownFill, BsPlusSquare, BsSignpostSplit } from 'react-icons/bs';
import { BiTrip } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Replace this with user authentification logic
  const user = false;

  const links = {
    home: '/',
    login: '#',
    register: '#',
    profile: '#',
    message: '#',
    search: '#',
    create: '#',
    myTrips: '#',
  };

  return (
    <>
      <HStack
        as={'nav'}
        h={'80px'}
        w={'100%'}
        paddingInline={'12px'}
        shadow={'md'}
      >
        <HStack justifyContent={'space-between'} w={'100%'}>
          <NavLink to={links.home} end>
            <Image src={'/images/logo-nav.png'} alt={'logo'} h={'50px'} />
          </NavLink>
          <HStack>
            {user ? (
              <HStack>
                <HStack display={{ base: 'none', md: 'flex' }}>
                  <Menu closeOnSelect>
                    <MenuButton as={Button} fontSize={'xl'}>
                      <Flex gap={'8px'} alignItems={'center'}>
                        <BiTrip />
                        Trips
                        <Text as={'span'} marginInlineStart={'8px'}>
                          <BsCaretDownFill />
                        </Text>
                      </Flex>
                    </MenuButton>
                    <MenuList>
                      <Link to={links.search}>
                        <MenuItem
                          icon={
                            <Text fontSize={'3xl'}>
                              <MdSearch />
                            </Text>
                          }
                          iconSpacing={'1.5'}
                        >
                          <Text fontSize={'lg'}>Search</Text>
                        </MenuItem>
                      </Link>
                      <MenuDivider />
                      <Link to={links.create}>
                        <MenuItem
                          icon={
                            <Text fontSize={'2xl'}>
                              <BsPlusSquare />
                            </Text>
                          }
                          iconSpacing={'1.5'}
                        >
                          <Text fontSize={'lg'}>Create</Text>
                        </MenuItem>
                      </Link>
                      <MenuDivider />
                      <Link to={links.myTrips}>
                        <MenuItem
                          icon={
                            <Text fontSize={'2xl'}>
                              <BsSignpostSplit />
                            </Text>
                          }
                          iconSpacing={'1.5'}
                        >
                          <Text fontSize={'lg'}>My trips</Text>
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                  <Button fontSize={'xl'} leftIcon={<MdOutlineChat />}>
                    Message
                  </Button>
                  <NavLink to={links.profile} end>
                    <Avatar
                      size={'lg'}
                      name="Profile Placeholder"
                      src="/images/profile-placeholder.png"
                    />
                  </NavLink>
                </HStack>
              </HStack>
            ) : (
              <Box display={{ base: 'none', md: 'block' }}>
                <NavLink to={links.login} end>
                  <Button variant={'outline'} fontSize={'xl'}>
                    Login
                  </Button>
                </NavLink>
                <NavLink to={links.register} end>
                  <Button fontSize={'xl'} marginInlineStart={'8px'}>
                    Register
                  </Button>
                </NavLink>
              </Box>
            )}
            <Box display={{ base: 'flex', md: 'none' }} fontSize={'3xl'}>
              <GiHamburgerMenu onClick={() => onOpen()} />
            </Box>
          </HStack>
        </HStack>
      </HStack>

      <Modal
        onClose={onClose}
        size={'full'}
        isOpen={isOpen}
        motionPreset={'slideInRight'}
        autoFocus={false}
      >
        <ModalContent>
          <ModalBody p={'0'} bg={'#394E61'}>
            <Flex
              h={'80px'}
              flexDir={'row-reverse'}
              justifyContent={'space-between'}
              alignItems={'center'}
              fontSize={'4xl'}
              paddingInline={'16px'}
              marginBlockEnd={'16px'}
              color={'#FFFFFF'}
              bg={'#394E61'}
            >
              <MdOutlineClose onClick={() => onClose()} />
              {user && (
                <NavLink to={links.profile} end>
                  <Avatar
                    marginBlockStart={'16px'}
                    size={'lg'}
                    name="Profile Placeholder"
                    src="/images/profile-placeholder.png"
                  />
                </NavLink>
              )}
            </Flex>
            {user ? (
              <>
                <Flex flexDir={'column'} color={'#FFFFFF'}>
                  <Box borderBlockStart={'1px solid #FFFFFF'}></Box>
                  <Link to={links.message}>
                    <Flex
                      w={'100%'}
                      gap={'8px'}
                      alignItems={'center'}
                      fontSize={'3xl'}
                      paddingBlock={'24px'}
                      paddingInlineStart={'80px'}
                      bg={'#394E61'}
                    >
                      <MdOutlineChat />
                      Message
                    </Flex>
                  </Link>
                  <Box borderBlockStart={'1px solid #FFFFFF'}></Box>
                  <Flex
                    flexDirection={'column'}
                    paddingBlockStart={'24px'}
                    bg={'#394E61'}
                  >
                    <Flex
                      w={'100%'}
                      gap={'8px'}
                      alignItems={'baseline'}
                      fontSize={'3xl'}
                      paddingInlineStart={'80px'}
                      paddingBlockEnd={'16px'}
                    >
                      <BiTrip />
                      Trips
                    </Flex>
                    <Box w={'100%'} bg={'#586b7e'} border={'1px solid #263542'}>
                      <UnorderedList
                        fontSize={'2xl'}
                        listStyleType={'none'}
                        m={'0'}
                      >
                        <Link to={links.search}>
                          <ListItem
                            paddingBlock={'16px'}
                            paddingInlineStart={'132px'}
                            borderBlockEnd={'1px solid #263542'}
                          >
                            <Flex gap={'8px'} alignItems={'center'}>
                              <MdSearch /> Search
                            </Flex>
                          </ListItem>
                        </Link>
                        <Link to={links.create}>
                          <ListItem
                            paddingBlock={'16px'}
                            paddingInlineStart={'132px'}
                            borderBlockEnd={'1px solid #263542'}
                          >
                            <Flex gap={'8px'} alignItems={'center'}>
                              <BsPlusSquare /> Create
                            </Flex>
                          </ListItem>
                        </Link>
                        <Link to={links.myTrips}>
                          <ListItem
                            paddingBlock={'16px'}
                            paddingInlineStart={'132px'}
                          >
                            <Flex gap={'8px'}>
                              <BsSignpostSplit /> My trips
                            </Flex>
                          </ListItem>
                        </Link>
                      </UnorderedList>
                    </Box>
                    <Box borderBlockStart={'1px solid #FFFFFF'}></Box>
                  </Flex>
                </Flex>
              </>
            ) : (
              <>
                <Flex
                  flexDir={'column'}
                  h={'calc(100vh - 80px)'}
                  color={'#FFFFFF'}
                >
                  <Box borderBlockStart={'1px solid #FFFFFF'}></Box>
                  <Link to={links.message}>
                    <Flex
                      w={'100%'}
                      gap={'8px'}
                      alignItems={'center'}
                      fontSize={'3xl'}
                      p={'24px'}
                      paddingInlineStart={'80px'}
                      bg={'#394E61'}
                    >
                      Login
                    </Flex>
                  </Link>
                  <Box borderBlockStart={'1px solid #FFFFFF'}></Box>
                  <Link to={links.message}>
                    <Flex
                      w={'100%'}
                      gap={'8px'}
                      alignItems={'center'}
                      fontSize={'3xl'}
                      p={'24px'}
                      paddingInlineStart={'80px'}
                      bg={'#394E61'}
                    >
                      Register
                    </Flex>
                  </Link>
                  <Box borderBlockStart={'1px solid #FFFFFF'}></Box>
                </Flex>
                
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
