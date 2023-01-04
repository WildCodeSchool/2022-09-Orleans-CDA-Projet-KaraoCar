import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  Box,
  Img,
} from '@chakra-ui/react';
import { AiOutlineEnter } from 'react-icons/ai';
import { HiUserAdd } from 'react-icons/hi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('handle');
    fetch('http://localhost:3333/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log('SUCCESS');
          window.location.href = '/';
        } else {
          console.log('ERROR');
          // on fail
          setError(data.error);
        }
      });
  };
  return (
    <Stack  minH={'95vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={10} flex={2} align={'center'} justify={'center'}>
        <Stack spacing={20} w={'full'} maxW={'md'}>
          <Heading
            fontSize={'50px'}
            marginBottom={'5rem'}
            alignSelf={'center'}
            fontWeight={900}
          >
            Log in to your account
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel fontSize={'20px'}>Email</FormLabel>
              <Input
              paddingLeft={'10px'}
                rounded={'8px'}
                border={'1px solid #000000'}
                backgroundColor={'#fff'}
                borderColor={'black'}
                height={'50px'}
                width={'500px'}
                fontSize={'25px'}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={'johndoe@gmail.com'}
              />
              <FormLabel fontSize={'20px'} marginTop={'1rem'}>
                Password
              </FormLabel>
              <Input
              paddingLeft={'10px'}
                rounded={'8px'}
                border={'1px solid #000000'}
                height={'50px'}
                width={'500px'}
                fontSize={'25px'}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={'**********'}
              />
              <Stack spacing={6}>
                <Button
                  mt={4}
                  rightIcon={<AiOutlineEnter size={'20px'} />}
                  marginTop={'2rem'}
                  height={'45px'}
                  width={'120px'}
                  rounded={'8px'}
                  type="submit"
                  backgroundColor={'#394E61'}
                  _hover={{ backgroundColor: '#E4F2FF', textColor: 'black' }}
                  textColor={'#fff'}
                  variant="solid"
                  alignSelf={'center'}
                  boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  Login
                </Button>
              </Stack>
            </FormControl>
          </form>
        </Stack>
      </Flex>
      <Box
        position="fixed"
        top="70%"
        left="63%"
        transform="translate(-50%, -50%)"
      >
        <Img src="/loginimage.svg" />
      </Box>
      <Flex
        flex={1}
        direction={'column'}
        align={'center'}
        justify={'center'}
        backgroundColor={'#E4F2FF'}
      >
        <Heading
          fontSize={'40px'}
          alignSelf={'center'}
          fontWeight={900}
        >
          New Here?
        </Heading>
        <Text alignSelf={'center'} fontFamily={'Lexend Deca'}>
          Sign up and discover the joys of singing during your trip
        </Text>
        <Link href="/signup">
          <Button
            mt={4}
            rightIcon={<HiUserAdd size={'20px'} />}
            border={'1px solid #000000'}
            backgroundColor={'#fff'}
            _hover={{ backgroundColor: '#394E61', textColor: 'white' }}
            marginTop={'2rem'}
            height={'40px'}
            width={'120px'}
            rounded={'8px'}
            type="submit"
            variant="solid"
            alignSelf={'center'}
            boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Sign Up
          </Button>
        </Link>
      </Flex>
    </Stack>
  );
};

export default Login;
