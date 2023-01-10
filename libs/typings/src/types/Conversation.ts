export type Conversation = {
  message_id: number;
  message_sendAt: string;
  message_content: string;
  message_readAt: string;
  sender_id: number;
  sender_firstname: string;
  sender_photo: string;
  receiver_id: number;
  receiver_firstname: string;
  receiver_photo: string;
  sender_lastname: string;
  receiver_lastname: string;
};
