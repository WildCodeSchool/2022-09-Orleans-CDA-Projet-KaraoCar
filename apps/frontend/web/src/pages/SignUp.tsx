import React, { useState } from 'react';
import {
  Grid,
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

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch('http://localhost:3333/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Signup failed');
        }
        return response.json();
      })
      .then(data => {
        // go to page
      })
      .catch(error => {
        setError(error.message);
      });
  };

  /* return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
} */
return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} direction={'column'} align={'center'} justify={'center'} backgroundColor={'#E4F2FF'}>
        <Heading fontSize={'40px'} alignSelf={'center'} >
          Already have an account?
        </Heading>
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
          Login
        </Button>
      </Flex>
      <Flex p={10} flex={2} align={'center'} justify={'center'}>
        <Stack spacing={20} w={'full'} maxW={'md'}>
          <Heading fontSize={'50px'} marginBottom={'5rem'} alignSelf={'center'}>
            Create Your Account
          </Heading>
          <Grid templateColumns="1fr 1fr" gap={6}>
          <FormControl id="email">
            <FormLabel fontSize={'25px'}>Firstname</FormLabel>
            
            <Input
              rounded={'8px'}
              border={'1px solid #000000'}
              backgroundColor={'#fff'}
              borderColor={'black'}
              height={'50px'}
              width={'350px'}
              fontSize={'25px'}
              type="username"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel fontSize={'25px'}>Lastname</FormLabel>
            
            <Input
              rounded={'8px'}
              border={'1px solid #000000'}
              backgroundColor={'#fff'}
              borderColor={'black'}
              height={'50px'}
              width={'350px'}
              fontSize={'25px'}
              type="username"
            />
          </FormControl>
      </Grid>
          <FormControl id="email">
            <FormLabel fontSize={'25px'}>Email address</FormLabel>
            
            <Input
              rounded={'8px'}
              border={'1px solid #000000'}
              backgroundColor={'#fff'}
              borderColor={'black'}
              height={'50px'}
              width={'700px'}
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
              width={'700px'}
              fontSize={'25px'}
              type="password"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel fontSize={'25px'}>Confirm Password</FormLabel>
            
            <Input
              rounded={'8px'}
              border={'1px solid #000000'}
              backgroundColor={'#fff'}
              borderColor={'black'}
              height={'50px'}
              width={'700px'}
              fontSize={'25px'}
              type="username"
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
              Create your account
            </Button>
          </Stack>
        </Stack>
      </Flex>
      
    </Stack>
  );
};

export default SignupForm;