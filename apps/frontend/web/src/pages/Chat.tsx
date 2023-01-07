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
import { Conversation } from '@libs/typings';

const Chat = () => {
  const [chattingWithUser, setChattingWithUser] = useState<number | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  //REPLACE THIS WITH AUTH LOGIC WHEN DONE
  const user = { id: 1 };

  useEffect(() => {
    const abortController = new AbortController();

    const getConversations = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_HOST}api/messages/conversations/${
            user.id
          }`,
          {
            signal: abortController.signal,
          }
        );
        const data = await response.json();
        setConversations(data);
      } catch (error) {}
    };

    getConversations();

    return () => {
      abortController.abort();
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(scrollToBottom, []);

  const formatDate = (date: string) => {
    const dateObject = new Date(date);

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthIndex = dateObject.getMonth();

    return `${dateObject.getDate()} ${
      months[monthIndex]
    } ${dateObject.getHours()}:${dateObject.getMinutes()}`;
  };

  const colorTextConversation = (conversation: Conversation) => {
    const chattingWith =
      conversation.sender_id === user.id
        ? conversation.receiver_id
        : conversation.sender_id;

    if (chattingWith === chattingWithUser) {
      return '#FFFFFF';
    }

    return '#000000';
  };

  const conversationBackGroundColor = (conversation: Conversation) => {
    const chattingWith =
      conversation.sender_id === user.id
        ? conversation.receiver_id
        : conversation.sender_id;

    if (chattingWith === chattingWithUser) {
      return '#394E61';
    }

    if (conversation.message_readAt) {
      return '#FFFFFF';
    }

    return '#D9D9D9';
  };

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
                {conversations.length > 0 ? 'Conversations' : 'No conversation'}
              </Text>
            </Center>
            {conversations.length > 0 &&
              conversations.map((conversation) => (
                <Box cursor={'pointer'} key={conversation.message_id}>
                  <Flex
                    marginBlockEnd={'12px'}
                    p={'12px'}
                    borderRadius={'8'}
                    color={colorTextConversation(conversation)}
                    backgroundColor={conversationBackGroundColor(conversation)}
                    _hover={{ backgroundColor: '#E4F2FF', color: '#000000' }}
                    onClick={() => {
                      conversation.sender_id === user.id
                        ? setChattingWithUser(conversation.receiver_id)
                        : setChattingWithUser(conversation.sender_id);
                    }}
                  >
                    <Avatar
                      src={
                        conversation.sender_id === user.id
                          ? `./images/${conversation.receiver_photo}`
                          : `./images/${conversation.sender_photo}`
                      }
                    />
                    <Flex
                      flexDir={'column'}
                      w={'100%'}
                      paddingInlineStart={'8px'}
                    >
                      <Flex w={'100%'} justifyContent={'space-between'}>
                        <Text paddingInlineEnd={'8px'} whiteSpace={'nowrap'}>
                          {conversation.sender_id === user.id
                            ? `${conversation.receiver_firstname} ${conversation.receiver_lastname}`
                            : `${conversation.sender_firstname} ${conversation.sender_lastname}`}
                        </Text>
                        <Text>{formatDate(conversation.message_sendAt)}</Text>
                      </Flex>
                      <Text paddingBlockStart={'4px'}>
                        {conversation.sender_id === user.id
                          ? conversation.message_content.length > 10
                            ? `You: ${conversation.message_content.slice(
                                0,
                                10
                              )}...`
                            : conversation.message_content
                          : conversation.message_content.length > 15
                          ? `${conversation.message_content.slice(0, 15)}...`
                          : conversation.message_content}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
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
        {chattingWithUser ? (
          <>
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
            </Flex>{' '}
          </>
        ) : (
          <Flex
            h={'100%'}
            w={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text as={'h2'} fontSize={'xl'}>
              {conversations.length > 0
                ? 'Please select a conversation'
                : 'You have no conversation'}
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Chat;
