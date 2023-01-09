import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { Conversation } from '@libs/typings';

import ReadingTime from '../../assets/undraw_reading_time.svg';

const Sidebar = ({
  conversations,
  user,
  chattingWithUser,
  isSideBarCollapsed,
  setIsSideBarCollapsed,
  handleConversationClick,
}: {
  conversations: Conversation[];
  user: { id: number };
  chattingWithUser: number | null;
  isSideBarCollapsed: boolean;
  setIsSideBarCollapsed: (value: boolean) => void;
  handleConversationClick: (value: Conversation) => void;
}) => {
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

    if (conversation.message_readAt || conversation.sender_id === user.id) {
      return '#FFFFFF';
    }

    return '#D9D9D9';
  };

  const conversationMessage = (conversation: Conversation) => {
    if (conversation.sender_id === user.id) {
      return `You: ${conversation.message_content.slice(0, 10)}...`;
    }

    if (conversation.message_content.length > 15) {
      return `You: ${conversation.message_content.slice(0, 15)}...`;
    }

    return conversation.message_content;
  };

  return (
    <Box
      h={'calc(100vh - 80px - 24px)'}
      w={{ base: '80px', md: '25%' }}
      maxW={'810px'}
    >
      <Flex
        position={isSideBarCollapsed ? 'initial' : 'absolute'}
        zIndex={isSideBarCollapsed ? 'initial' : '999'}
        w={isSideBarCollapsed ? '100%' : 'fit-content'}
        h={'calc(100vh - 80px)'}
        flexDir={'column'}
        justifyContent={{ base: 'start', md: 'space-between' }}
        backgroundColor={'#72bde5'}
        shadow={'mdRight'}
      >
        <Box
          display={{ base: 'none', md: 'block' }}
          paddingBlockStart={'48px'}
          flexGrow={'1'}
        >
          <Image
            src={ReadingTime}
            width={'80%'}
            maxW={'315px'}
            marginInline={'auto'}
          />
        </Box>

        <Center>
          <Text
            display={{
              base: 'none',
              md: 'block',
            }}
            paddingBlockEnd={'12px'}
            fontSize={'24'}
            fontWeight={'bold'}
          >
            {conversations.length > 0 && 'Conversations'}
          </Text>
        </Center>
        <Box display={{ base: 'inline', md: 'none' }} p={'24px'}>
          <Button
            w={'100%'}
            marginInline={'auto'}
            onClick={() => setIsSideBarCollapsed(!isSideBarCollapsed)}
          >
            {isSideBarCollapsed ? '>' : '<'}
          </Button>
        </Box>

        <Box
          paddingInline={{ base: '12px', md: '24px' }}
          overflowY={'auto'}
          overflowX={'hidden'}
          maxH={{ base: '95%', md: '60%' }}
        >
          {conversations.length > 0 &&
            conversations.map((conversation) => (
              <Flex
                key={conversation.message_id}
                cursor={'pointer'}
                marginBlockEnd={'12px'}
                p={'12px'}
                flexDir={{
                  base: isSideBarCollapsed ? 'column' : 'row',
                  lg: 'row',
                }}
                alignItems={{
                  base: isSideBarCollapsed ? 'center' : 'start',
                  lg: 'start',
                }}
                border={'1px solid #dfdfdf'}
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
                  size={{ base: isSideBarCollapsed ? 'sm' : 'md', lg: 'md' }}
                />
                <Flex
                  display={{
                    base: isSideBarCollapsed ? 'none' : 'block',
                    md: 'block',
                  }}
                  w={'100%'}
                  flexDir={'column'}
                  paddingInlineStart={'8px'}
                >
                  <Flex
                    w={'100%'}
                    justifyContent={'space-between'}
                    flexDir={{
                      base: isSideBarCollapsed ? 'column-reverse' : 'row',
                      lg: 'row',
                    }}
                    flexWrap={'wrap-reverse'}
                  >
                    <Flex
                      w={{
                        base: isSideBarCollapsed ? '100%' : '60%',
                        lg: '60%',
                      }}
                    >
                      <Text
                        paddingInlineEnd={'8px'}
                        whiteSpace={'nowrap'}
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                      >
                        {conversation.sender_id === user.id
                          ? conversation.receiver_firstname
                          : conversation.sender_firstname}
                      </Text>
                      <Text
                        paddingInlineEnd={'8px'}
                        w={'fit-content'}
                        flexGrow={{
                          base: isSideBarCollapsed ? '0' : '1',
                          lg: '1',
                        }}
                      >
                        {conversation.sender_id === user.id
                          ? conversation.receiver_lastname
                          : conversation.sender_lastname}
                        {'.'}
                      </Text>
                    </Flex>
                    <Text
                      textAlign={{
                        base: isSideBarCollapsed ? 'center' : 'end',
                        lg: 'end',
                      }}
                      marginBlockStart={{
                        base: isSideBarCollapsed ? '10px' : '0',
                        lg: '0',
                      }}
                      marginBlockEnd={'10px'}
                    >
                      {formatDate(conversation.message_sendAt)}
                    </Text>
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
  );
};

export default Sidebar;
