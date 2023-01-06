import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Button,
  Avatar,
  Center,
} from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';

import ReadingTime from '../assets/undraw_reading_time.svg';
import { FiSend } from 'react-icons/fi';

const Chat = () => {
  const [chattingWithUser, setChattingWithUser] = useState<String | null>(null);

  useEffect(() => {
    setChattingWithUser('George L.');
  }, []);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(scrollToBottom, []);

  const lastMessages = [
    {
      id: 1,
      name: 'George W.',
      image: 'profile-placeholder.png',
      content: 'Bye',
      sendAt: '05/01/23 12:31:00',
      readAt: '05/01/23 12:41:00',
    },
    {
      id: 2,
      name: 'Donald T.',
      image: 'profile-placeholder.png',
      content: 'go ?',
      sendAt: '05/01/23 12:31:00',
      readAt: null,
    },
    {
      id: 3,
      name: 'Joe B.',
      image: 'profile-placeholder.png',
      content: 'Hi',
      sendAt: '05/01/23 12:31:00',
      readAt: null,
    },
  ];

  const testMessages = [
    { user_id: 1, image: 'profile-placeholder.png', message: 'Hello' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Hi' },
    { user_id: 1, image: 'profile-placeholder.png', message: 'How are you?' },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'I am fine, how are you?',
    },
    {
      user_id: 1,
      image: 'profile-placeholder.png',
      message: 'I am fine too, thanks for asking.',
    },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'You are welcome.',
    },
    { user_id: 1, image: 'profile-placeholder.png', message: 'Bye' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Bye' },
    { user_id: 1, image: 'profile-placeholder.png', message: 'Hello' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Hi' },
    { user_id: 1, image: 'profile-placeholder.png', message: 'How are you?' },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'I am fine, how are you?',
    },
    {
      user_id: 1,
      image: 'profile-placeholder.png',
      message: 'I am fine too, thanks for asking.',
    },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'You are welcome.',
    },
    { user_id: 1, image: 'profile-placeholder.png', message: 'Bye' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Bye' },
    { user_id: 1, image: 'profile-placeholder.png', message: 'Hello' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Hi' },
    { user_id: 1, image: 'profile-placeholder.png', message: 'How are you?' },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'I am fine, how are you?',
    },
    {
      user_id: 1,
      image: 'profile-placeholder.png',
      message: 'I am fine too, thanks for asking.',
    },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'You are welcome.',
    },
    { user_id: 1, image: 'profile-placeholder.png', message: 'Bye' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Bye' },
    { user_id: 1, image: 'profile-placeholder.png', message: 'Hello' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Hi' },
    { user_id: 1, image: 'profile-placeholder.png', message: 'How are you?' },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'I am fine, how are you?',
    },
    {
      user_id: 1,
      image: 'profile-placeholder.png',
      message: 'I am fine too, thanks for asking.',
    },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'You are welcome.',
    },
    { user_id: 1, image: 'profile-placeholder.png', message: 'Bye' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Bye' },
    { user_id: 1, image: 'profile-placeholder.png', message: 'Hello' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Hi' },
    { user_id: 1, image: 'profile-placeholder.png', message: 'How are you?' },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'I am fine, how are you?',
    },
    {
      user_id: 1,
      image: 'profile-placeholder.png',
      message: 'I am fine too, thanks for asking.',
    },
    {
      user_id: 2,
      image: 'profile-placeholder.png',
      message: 'You are welcome.',
    },
    { user_id: 1, image: 'profile-placeholder.png', message: 'Bye' },
    { user_id: 2, image: 'profile-placeholder.png', message: 'Bye' },
  ];

  return (
    <Flex paddingBlockStart={'48px'} paddingBlockEnd={'24px'}>
      <Box h={'calc(100vh - 80px - 48px - 24px)'} w={'25%'} maxW={'810px'}>
        <Flex h={'100%'} flexDir={'column'} justifyContent={'space-between'}>
          <Image src={ReadingTime} width={'80%'} marginInlineStart={'auto'} />
          <Box paddingInline={'24px'}>
            <Center>
              <Text
                paddingBlockEnd={'12px'}
                fontSize={'24'}
                fontWeight={'bold'}
              >
                {lastMessages.length > 0 ? 'Conversations' : 'No conversation'}
              </Text>
            </Center>
            {lastMessages.length > 0 &&
              lastMessages.map((msg, index) => (
                <Flex
                  key={index}
                  marginBlockEnd={'12px'}
                  p={'12px'}
                  borderRadius={'8'}
                  backgroundColor={'#394E61'}
                >
                  <Avatar src={`./images/${msg.image}`} />
                  <Flex
                    w={'100%'}
                    paddingInlineStart={'8px'}
                    justifyContent={'space-between'}
                    color={'white'}
                  >
                    <Flex flexDir={'column'}>
                      <Text>{msg.name}</Text>
                      <Text>{msg.content}</Text>
                    </Flex>
                    <Text>{msg.sendAt}</Text>
                  </Flex>
                </Flex>
              ))}
          </Box>
        </Flex>
      </Box>
      <Flex
        flexDir={'column'}
        h={'calc(100vh - 80px - 48px - 24px)'}
        w={'100%'}
        maxW={'1000px'}
        m={'auto'}
      >
        <Text
          w={'fit-content'}
          m={'auto'}
          fontSize={'32'}
          fontWeight={'bold'}
          paddingBlockStart={'48px'}
          position={'absolute'}
          top={'80px'}
          left={'0'}
          right={'0'}
        >
          {chattingWithUser ? `Chatting with ${chattingWithUser}` : 'Messages'}
        </Text>
        <Box
          flexGrow={'1'}
          overflow={'auto'}
          minH={'500px'}
          marginBlockEnd={'24px'}
          marginBlockStart={'96px'}
        >
          {testMessages.map((message, index) => (
            <Flex
              key={index}
              paddingBlockStart={'12px'}
              paddingBlockEnd={'12px'}
              flexDir={index % 2 === 0 ? 'row' : 'row-reverse'}
              alignItems={'end'}
              maxW={'90%'}
            >
              <Flex
                position={'relative'}
                h={'42px'}
                w={'42px'}
                minW={'42px'}
                borderRadius={'8px 8px 0 8px'}
                alignItems={'end'}
              >
                <Box
                  h={'30%'}
                  w={'30%'}
                  marginInlineStart={index % 2 === 0 ? 'auto' : '0'}
                  marginInlineEnd={index % 2 === 0 ? '0' : 'auto'}
                  backgroundColor={index % 2 === 0 ? '#394E61' : '#E4F2FF'}
                ></Box>
                <Image
                  h={'42px'}
                  minW={'42px'}
                  position={'absolute'}
                  top={'0'}
                  left={'0'}
                  zIndex={'1'}
                  borderRadius={'8'}
                  p={'3px'}
                  src={'./images/' + message.image}
                  backgroundColor={'white'}
                />
              </Flex>
              <Flex
                p={'12px'}
                backgroundColor={index % 2 === 0 ? '#394E61' : '#E4F2FF'}
                alignItems={'end'}
                borderRadius={
                  index % 2 === 0 ? '8px 8px 8px 0' : '8px 8px 0 8px'
                }
              >
                <Text
                  fontSize={'20'}
                  color={index % 2 === 0 ? '#FFFFFF' : '#000000'}
                >
                  {message.message}
                </Text>
              </Flex>
            </Flex>
          ))}
          <Box ref={messagesEndRef}></Box>
        </Box>
        <Flex shadow={'lg'}>
          <Input
            placeholder={'Type your message here'}
            borderRightRadius={'0'}
          />
          <Button
            paddingInline={'28px'}
            rightIcon={<FiSend />}
            borderLeftRadius={'0'}
          >
            {'Send'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Chat;
