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
  Link,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { HiUserAdd } from 'react-icons/hi';
import { AiOutlineEnter } from 'react-icons/ai';

function SignupForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    fetch('/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        confirm_password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Signup failed');
        }
        return response.json();
      })
      .then((data) => {
        window.location.href = '/';
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Stack minH={'95vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex
        flex={1}
        direction={'column'}
        align={'center'}
        justify={'center'}
        backgroundColor={'#E4F2FF'}
      >
        <Heading fontSize={'40px'} alignSelf={'center'} fontWeight={900}>
          Already have an account?
        </Heading>
        <Link href="/login">
          <Button
            mt={4}
            rightIcon={<AiOutlineEnter size={'20px'} />}
            border={'1px solid #000000'}
            backgroundColor={'#fff'}
            _hover={{ backgroundColor: '#394E61', textColor: 'white' }}
            marginTop={'2rem'}
            height={'40px'}
            width={'100px'}
            rounded={'8px'}
            type={'submit'}
            variant={'solid'}
            alignSelf={'center'}
            boxShadow={'0 4px 4px rgba(0, 0, 0, 0.25)'}
          >
            Log in
          </Button>
        </Link>
      </Flex>
      <Flex p={10} flex={2} align={'center'} justify={'center'}>
        <Stack spacing={20} w={'full'} maxW={'md'}>
          <Heading
            fontSize={'50px'}
            marginBottom={'5rem'}
            alignSelf={'center'}
            fontWeight={900}
          >
            Create an account
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns={'1fr 1fr'} gap={40}>
              <FormControl>
                <FormLabel fontSize={'20px'}>Firstname</FormLabel>
                <Input
                  {...register('firstname', {
                    required: 'this is required',
                  })}
                  paddingLeft={'10px'}
                  rounded={'8px'}
                  border={'1px solid #000000'}
                  backgroundColor={'#fff'}
                  borderColor={'black'}
                  height={'50px'}
                  width={'350px'}
                  fontSize={'25px'}
                  type={'string'}
                  onChange={(event) => setFirstname(event.target.value)}
                  placeholder={'John'}
                />
                {errors.firstname && (
                  <Text color={'red'} paddingTop={'5px'}>
                    Firstname is required.
                  </Text>
                )}
              </FormControl>
              <FormControl>
                <FormLabel fontSize={'20px'}>Lastname</FormLabel>
                <Input
                  {...register('lastname', {
                    required: 'this is required',
                  })}
                  paddingLeft={'10px'}
                  rounded={'8px'}
                  border={'1px solid #000000'}
                  backgroundColor={'#fff'}
                  borderColor={'black'}
                  height={'50px'}
                  width={'350px'}
                  fontSize={'25px'}
                  type={'string'}
                  onChange={(event) => setLastname(event.target.value)}
                  placeholder={'Doe'}
                />
                {errors.lastname && (
                  <Text color={'red'} paddingTop={'5px'}>
                    Lastname is required.
                  </Text>
                )}
              </FormControl>
            </Grid>
            <FormControl>
              <FormLabel fontSize={'20px'} marginTop={'1rem'}>
                Email address
              </FormLabel>
              <Input
                {...register('email', {
                  required: 'this is required',
                })}
                paddingLeft={'10px'}
                rounded={'8px'}
                border={'1px solid #000000'}
                backgroundColor={'#fff'}
                borderColor={'black'}
                height={'50px'}
                width={'740px'}
                fontSize={'25px'}
                type={'email'}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={'Johndoe@gmail.com'}
              />
              {errors.email && (
                <Text color={'red'} paddingTop={'5px'}>
                  Email is required.
                </Text>
              )}
              <FormLabel fontSize={'20px'} marginTop={'1rem'}>
                Password
              </FormLabel>
              <Input
                {...register('password', {
                  required: 'this is required',
                })}
                paddingLeft={'10px'}
                rounded={'8px'}
                border={'1px solid #000000'}
                height={'50px'}
                width={'740px'}
                fontSize={'25px'}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder={'**********'}
              />
              {errors.password && (
                <Text color={'red'} paddingTop={'5px'}>
                  Password is required.
                </Text>
              )}
              <FormLabel fontSize={'20px'} marginTop={'1rem'}>
                Confirm Password
              </FormLabel>

              <Input
                {...register('confirm_password', {
                  required: 'this is required',
                })}
                paddingLeft={'10px'}
                rounded={'8px'}
                border={'1px solid #000000'}
                backgroundColor={'#fff'}
                borderColor={'black'}
                height={'50px'}
                width={'740px'}
                fontSize={'25px'}
                type="password"
                onChange={(event) => setConfirm_password(event.target.value)}
                placeholder={'**********'}
              />
              {errors.confirm_password && (
                <Text color={'red'} paddingTop={'5px'}>
                  You must confirm your password.
                </Text>
              )}
            </FormControl>
            <Stack spacing={6}>
              <Button
                mt={4}
                rightIcon={<HiUserAdd size={'20px'} />}
                marginTop={'2rem'}
                height={'40px'}
                width={'200px'}
                rounded={'8px'}
                type="submit"
                backgroundColor={'#394E61'}
                _hover={{ backgroundColor: '#E4F2FF', textColor: 'black' }}
                textColor={'#fff'}
                variant={'solid'}
                alignSelf={'center'}
                boxShadow={'0 4px 4px rgba(0, 0, 0, 0.25)'}
              >
                Create an account
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default SignupForm;
