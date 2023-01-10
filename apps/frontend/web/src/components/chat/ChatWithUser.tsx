import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import { Conversation, Message } from '@libs/typings';
import { FiSend } from 'react-icons/fi';

const ChatWithUser = ({
  conversations,
  user,
  messages,
  chattingWithUser,
  chattingWithUserName,
  messagesEndRef,
  handleKeyUpInSend,
  setMessageToSend,
  messageToSend,
  sendMessage,
}: {
  conversations: Conversation[];
  user: { id: number };
  messages: Message[];
  chattingWithUser: number | null;
  chattingWithUserName: string;
  messagesEndRef: React.Ref<HTMLDivElement>;
  handleKeyUpInSend: (e: React.KeyboardEvent<HTMLElement>) => void;
  setMessageToSend: (v: string) => void;
  messageToSend: string;
  sendMessage: () => void;
}) => {
  return (
    <Flex
      flexDir={'column'}
      h={'calc(100vh - 80px - 24px)'}
      w={'100%'}
      paddingInline={{ base: '8px', md: '24px' }}
      m={'auto'}
    >
      <Text
        w={'fit-content'}
        m={'auto'}
        fontSize={{ base: '24', lg: '32' }}
        fontWeight={'bold'}
        paddingBlockStart={'48px'}
        textAlign={'center'}
      >
        {chattingWithUser
          ? `Chatting with ${messages.length > 0 && chattingWithUserName}`
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
                          ? 'slateblue'
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
                      src={`./uploads/profiles/${message.receiver_photo}`}
                      fallbackSrc={'./images/profile-placeholder.png'}
                      backgroundColor={'white'}
                    />
                  </Flex>
                  <Flex
                    p={'12px'}
                    maxW={'80%'}
                    backgroundColor={
                      message.receiver_id === user.id ? 'slateblue' : '#E4F2FF'
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
                      fontWeight={'light'}
                      color={
                        message.receiver_id === user.id ? '#FFFFFF' : '#000000'
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
              fontWeight={'light'}
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
          <Text as={'h2'} fontSize={'xl'} textAlign={'center'}>
            {conversations.length > 0
              ? 'Please select a conversation'
              : 'There is no conversation'}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default ChatWithUser;
