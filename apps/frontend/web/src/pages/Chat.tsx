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
import { Conversation, Message } from '@libs/typings';

const Chat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [chattingWithUser, setChattingWithUser] = useState<number | null>(null);
  const [chattingWithUserName, setChattingWithUserName] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageToSend, setMessageToSend] = useState<string>('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isScrollToBottomAllowedRef = useRef<boolean>(true);

  //REPLACE THIS WITH AUTH LOGIC WHEN DONE
  const user = { id: 1 };

  const getConversations = async (abortController?: AbortController) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_HOST}api/messages/conversations/${user.id}`,
        {
          signal: abortController?.signal,
        }
      );
      const data = await response.json();

      setConversations(data);
    } catch (error) {}
  };

  const getMessages = async (
    abortController?: AbortController | null,
    noScroll: boolean = true
  ) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_HOST}api/messages/${
          user.id
        }/${chattingWithUser}`,
        {
          signal: abortController?.signal,
        }
      );
      const data: Message[] = await response.json();

      isScrollToBottomAllowedRef.current = noScroll;
      setMessages(data);
      if (data.length > 0) {
        const chatterName =
          data[0].sender_id === user.id
            ? `${data[0].receiver_firstname} ${data[0].receiver_lastname}`
            : `${data[0].sender_firstname} ${data[0].sender_lastname}`;
        setChattingWithUserName(chatterName);
      }
    } catch (error) {}
  };

  useEffect(() => {
    const abortController = new AbortController();

    getConversations(abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    if (chattingWithUser) {
      const abortController = new AbortController();

      getMessages(abortController);
      return () => {
        abortController.abort();
      };
    }
  }, [chattingWithUser]);

  useEffect(() => {
    const interval = setInterval(() => {
      getConversations();
      if (chattingWithUser) {
        getMessages(null, false);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [chattingWithUser]);

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

  useEffect(() => {
    if (isScrollToBottomAllowedRef.current) {
      messagesEndRef.current?.scrollIntoView();
    }
  }, [messages]);

  const handleConversationClick = (conversation: Conversation) => {
    conversation.sender_id === user.id
      ? setChattingWithUser(conversation.receiver_id)
      : setChattingWithUser(conversation.sender_id);

    if (conversation.receiver_id === user.id && !conversation.message_readAt) {
      const markAsRead = async () => {
        try {
          await fetch(
            `${import.meta.env.VITE_API_HOST}api/messages/mark-as-read/${
              conversation.receiver_id
            }/${conversation.sender_id}`,
            {
              method: 'PATCH',
            }
          );
          getConversations();
        } catch (error) {}
      };
      markAsRead();
    }
  };

  const sendMessage = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_HOST}api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: user.id,
          receiver: chattingWithUser,
          sendAt: new Date().toISOString(),
          content: messageToSend,
        }),
      });

      setMessageToSend('');
      getMessages();
      getConversations();
    } catch (error) {}
  };

  const handleKeyUpInSend = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
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

    if (conversation.message_readAt || conversation.sender_id === user.id) {
      return '#FFFFFF';
    }

    return '#D9D9D9';
  };

  const conversationMessage = (conversation: Conversation) => {
    if (conversation.sender_id === user.id) {
      if (conversation.message_content.length > 10) {
        return `You: ${conversation.message_content.slice(0, 10)}...`;
      }
      return `You: ${conversation.message_content}`;
    }

    if (conversation.message_content.length > 15) {
      return `You: ${conversation.message_content.slice(0, 15)}...`;
    }

    return conversation.message_content;
  };

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
                <Flex
                  cursor={'pointer'}
                  key={conversation.message_id}
                  marginBlockEnd={'12px'}
                  p={'12px'}
                  borderRadius={'8'}
                  color={colorTextConversation(conversation)}
                  backgroundColor={conversationBackGroundColor(conversation)}
                  _hover={{ backgroundColor: '#E4F2FF', color: '#000000' }}
                  onClick={() => handleConversationClick(conversation)}
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
                      {conversationMessage(conversation)}
                    </Text>
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
          {chattingWithUser
            ? `Chatting with ${
                messages.length > 0 && `${chattingWithUserName}`
              }`
            : 'Messages'}
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
              {messages.length > 0 &&
                messages.map((message) => (
                  <Flex
                    key={message.message_id}
                    paddingBlockStart={'12px'}
                    paddingBlockEnd={'12px'}
                    flexDir={
                      message.receiver_id === user.id ? 'row' : 'row-reverse'
                    }
                    alignItems={'end'}
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
                        marginInlineStart={
                          message.receiver_id === user.id ? 'auto' : '0'
                        }
                        marginInlineEnd={
                          message.receiver_id === user.id ? '0' : 'auto'
                        }
                        backgroundColor={
                          message.receiver_id === user.id
                            ? '#394E61'
                            : '#E4F2FF'
                        }
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
                        src={`./images/${message.receiver_photo}`}
                        fallbackSrc={'./images/profile-placeholder.png'}
                        backgroundColor={'white'}
                      />
                    </Flex>
                    <Flex
                      p={'12px'}
                      maxW={'80%'}
                      backgroundColor={
                        message.receiver_id === user.id ? '#394E61' : '#E4F2FF'
                      }
                      alignItems={'end'}
                      borderRadius={
                        message.receiver_id === user.id
                          ? '8px 8px 8px 0'
                          : '8px 8px 0 8px'
                      }
                    >
                      <Text
                        fontSize={'20'}
                        color={
                          message.receiver_id === user.id
                            ? '#FFFFFF'
                            : '#000000'
                        }
                      >
                        {message.message_content}
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
                value={messageToSend}
                onChange={(e) => setMessageToSend(e.target.value)}
                onKeyUp={(e) => handleKeyUpInSend(e)}
              />
              <Button
                paddingInline={'28px'}
                rightIcon={<FiSend />}
                borderLeftRadius={'0'}
                onClick={() => sendMessage()}
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
