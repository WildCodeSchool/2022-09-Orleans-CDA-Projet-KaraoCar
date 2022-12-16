import {
  Avatar,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineChat, MdSearch } from 'react-icons/md';
import { BsPlusSquare, BsSignpostSplit } from 'react-icons/bs';
import { BiTrip } from 'react-icons/bi';

const Navbar = () => {
  // Replace this with user authentification logic
  const user = true;

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
    <HStack
      as={'nav'}
      h={'80px'}
      w={'100%'}
      paddingInline={'12px'}
      shadow={'md'}
      display={{ base: 'none', md: 'flex' }}
    >
      <HStack justifyContent={'space-between'} w={'100%'}>
        <NavLink to={links.home} end>
          <Image src={'/images/logo-nav.png'} alt={'logo'} h={'50px'} />
        </NavLink>
        <HStack gap={'10px'}>
          {user ? (
            <>
              <Menu closeOnSelect>
                <MenuButton as={Button} fontSize={'xl'}>
                  <Flex gap={'8px'} alignItems={'baseline'}>
                    <BiTrip />
                    Trips
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
              <NavLink to={'/'} end>
                <Avatar
                  size={'lg'}
                  name="Profile Placeholder"
                  src="/images/profile-placeholder.png"
                />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to={'#'} end>
                <Button variant={'outline'} fontSize={'xl'}>
                  Login
                </Button>
              </NavLink>
              <NavLink to={'#'} end>
                <Button fontSize={'xl'}>Register</Button>
              </NavLink>
            </>
          )}
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Navbar;
