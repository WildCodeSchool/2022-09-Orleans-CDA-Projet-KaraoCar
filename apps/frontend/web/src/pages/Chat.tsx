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
import { Conversation, Message } from '@libs/typings';
import Sidebar from '../components/chat/Sidebar';
import ChatWithUser from '../components/chat/ChatWithUser';

const Chat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [chattingWithUser, setChattingWithUser] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageToSend, setMessageToSend] = useState<string>('');
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState<boolean>(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isScrollToBottomAllowedRef = useRef<boolean>(true);
  const chattingWithUserNameRef = useRef<string>('');

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
            ? `${data[0].receiver_firstname} ${data[0].receiver_lastname}.`
            : `${data[0].sender_firstname} ${data[0].sender_lastname}.`;
        chattingWithUserNameRef.current = chatterName;
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

  useEffect(() => {
    if (isScrollToBottomAllowedRef.current) {
      messagesEndRef.current?.scrollIntoView();
    }
  }, [messages]);

  const handleConversationClick = (conversation: Conversation) => {
    conversation.sender_id === user.id
      ? setChattingWithUser(conversation.receiver_id)
      : setChattingWithUser(conversation.sender_id);

    setIsSideBarCollapsed(true);

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
          content: messageToSend.trim(),
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

  return (
    <Flex paddingBlockEnd={'24px'}>
      <Sidebar
        conversations={conversations}
        user={user}
        chattingWithUser={chattingWithUser}
        isSideBarCollapsed={isSideBarCollapsed}
        setIsSideBarCollapsed={setIsSideBarCollapsed}
        handleConversationClick={handleConversationClick}
      />
      <ChatWithUser
        conversations={conversations}
        user={user}
        messages={messages}
        chattingWithUser={chattingWithUser}
        chattingWithUserName={chattingWithUserNameRef.current}
        messagesEndRef={messagesEndRef}
        handleKeyUpInSend={handleKeyUpInSend}
        setMessageToSend={setMessageToSend}
        messageToSend={messageToSend}
        sendMessage={sendMessage}
      />
    </Flex>
  );
};

export default Chat;
