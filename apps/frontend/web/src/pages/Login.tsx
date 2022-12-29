import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  extendTheme,
  Center,
  Text,
} from '@chakra-ui/react';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  /*const handleSubmit = (event: any) => {
    event.preventDefault(); */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch('http://localhost:3333/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
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
  /* 
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username:</label>
      <input
        type="username"
        id="username"
        value={username}
        onChange={(event) => setusername(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {error && <div className="error">{error}</div>}
      <button type="submit">Log in</button>
    </form>
  );
};
*/
  /*
    <form onSubmit={handleSubmit}>
      <Stack>
        <FormControl>
          <FormLabel htmlFor="username">username</FormLabel>
          <Input
            id="username"
            type="username"
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setusername(event.target.value)
            }
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            placeholder="Enter your password"
          />
        </FormControl>
        {error && <div>{error}</div>}
        <Button type="submit" mt={4}>
          Login
        </Button>
      </Stack>
    </form>
  )*/
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={10} flex={2} align={'center'} justify={'center'}>
        <Stack spacing={20} w={'full'} maxW={'md'}>
          <Heading fontSize={'50px'} marginBottom={'5rem'} alignSelf={'center'}>
            Log in to your account
          </Heading>
          <FormControl id="email">
            <FormLabel fontSize={'25px'}>Email address</FormLabel>
            <Input
              rounded={'8px'}
              border={'1px solid #000000'}
              backgroundColor={'#fff'}
              borderColor={'black'}
              height={'50px'}
              width={'500px'}
              fontSize={'25px'}
              type="username"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel fontSize={'25px'}>Password</FormLabel>
            <Input
              rounded={'8px'}
              border={'1px solid #000000'}
              height={'50px'}
              width={'500px'}
              fontSize={'25px'}
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              marginTop={'2rem'}
              height={'40px'}
              width={'300px'}
              rounded={'8px'}
              type="submit"
              backgroundColor={'#394E61'}
              textColor={'#fff'}
              variant="solid"
              alignSelf={'center'}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} backgroundColor={'#E4F2FF'}>
        <Heading fontSize={'40px'} alignSelf={'center'} >
          New Here?
        </Heading>
        <Text alignSelf={'center'}>
          Sign up and discover the joys of singing during your trip
        </Text>
        <Button
          border={'1px solid #000000'}
          backgroundColor={'#fff'}
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
      </Flex>
    </Stack>
  );
};

export default Login;
