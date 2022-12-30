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
  Icon,
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  /*const handleSubmit = (event: any) => {
    event.preventDefault(); */
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
          // TODO: redirection to another page
        } else {
          console.log('ERROR');
          // on fail
          setError(data.error);
        }
      });
  };
  // Working Form
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor="username">username:</label>
  //     <input
  //       type="username"
  //       id="username"
  //       value={username}
  //       onChange={(event) => setusername(event.target.value)}
  //     />
  //     <br />
  //     <label htmlFor="password">Password:</label>
  //     <input
  //       type="password"
  //       id="password"
  //       value={password}
  //       onChange={(event) => setPassword(event.target.value)}
  //     />
  //     <br />
  //     {error && <div className="error">{error}</div>}
  //     <button type="submit">Log in</button>
  //   </form>
  // );
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={10} flex={2} align={'center'} justify={'center'}>
        <Stack spacing={20} w={'full'} maxW={'md'}>
          <Heading fontSize={'50px'} marginBottom={'5rem'} alignSelf={'center'}>
            Log in to your account
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel fontSize={'25px'}>Email</FormLabel>
              <Input
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
              />
              <FormLabel fontSize={'25px'}>Password</FormLabel>
              <Input
                rounded={'8px'}
                border={'1px solid #000000'}
                height={'50px'}
                width={'500px'}
                fontSize={'25px'}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Stack spacing={6}>
                <Button
                  mt={4}
                  rightIcon={<Icon name="arrow-forward" />}
                  marginTop={'2rem'}
                  height={'40px'}
                  width={'300px'}
                  rounded={'8px'}
                  type="submit"
                  backgroundColor={'#394E61'}
                  _hover={{ backgroundColor: '#E4F2FF', textColor: 'black'}}
                  textColor={'#fff'}
                  variant="solid"
                  alignSelf={'center'}
                  
                >
                  Login
                </Button>
              </Stack>
            </FormControl>
          </form>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        direction={'column'}
        align={'center'}
        justify={'center'}
        backgroundColor={'#E4F2FF'}
      >
        <Heading fontSize={'40px'} alignSelf={'center'}>
          New Here?
        </Heading>
        <Text alignSelf={'center'}>
          Sign up and discover the joys of singing during your trip
        </Text>
        <Link href="/signup">
          <Button
            mt={4}
            rightIcon={<Icon name="arrow-forward" />}
            border={'1px solid #000000'}
            backgroundColor={'#fff'}
            
            _hover={{ backgroundColor: '#394E61', textColor: 'white'}}
            marginTop={'2rem'}
            height={'40px'}
            width={'300px'}
            rounded={'8px'}
            type="submit"
            variant="solid"
            alignSelf={'center'}
          >
            Sign Up
          </Button>
        </Link>
      </Flex>
    </Stack>
  );
};

export default Login;
