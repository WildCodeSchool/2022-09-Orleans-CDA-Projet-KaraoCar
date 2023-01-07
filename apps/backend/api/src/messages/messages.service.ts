import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findAllConversationMessages(userId: number, chattingWithId: number) {
    const messages = await this.messageRepository
      .createQueryBuilder('message')
      .innerJoinAndSelect('message.sender', 'sender')
      .innerJoinAndSelect('message.receiver', 'receiver')
      .where('message.sender = :userId', { userId: userId })
      .andWhere('message.receiver = :chattingWithId', {
        chattingWithId: chattingWithId,
      })
      .orWhere('message.sender = :chattingWithId', {
        chattingWithId: chattingWithId,
      })
      .andWhere('message.receiver = :userId', {
        userId: userId,
      })
      .select([
        'message.id',
        'message.sendAt',
        'message.content',
        'message.readAt',
        'sender.id',
        'sender.firstname',
        'LEFT (sender.lastname, 1) AS sender_lastname',
        'sender.photo',
        'receiver.id',
        'receiver.firstname',
        'LEFT (receiver.lastname, 1) AS receiver_lastname',
        'receiver.photo',
      ])
      .orderBy('message.sendAt', 'ASC')
      .execute();
    return messages;
  }

  async findAllLastMessages(id: number) {
    const conversations = this.messageRepository
      .createQueryBuilder('m')
      .select(['MAX(id) AS lastId'])
      .where('m.sender = :userId', { userId: id })
      .orWhere('m.receiver = :userId', { userId: id })
      .groupBy(
        "CONCAT(LEAST(m.sender, m.receiver), '.', GREATEST(m.sender, m.receiver))",
      );

    const lastMessages = await this.messageRepository
      .createQueryBuilder('message')
      .innerJoinAndSelect('message.sender', 'sender')
      .innerJoinAndSelect('message.receiver', 'receiver')
      .innerJoin(
        `(${conversations.getQuery()})`,
        'conversations',
        'message.id = conversations.lastId',
      )
      .select([
        'message.id',
        'message.sendAt',
        'message.readAt',
        'message.content',
        'sender.id',
        'sender.firstname',
        'LEFT (sender.lastname, 1) AS sender_lastname',
        'sender.photo',
        'receiver.id',
        'receiver.firstname',
        'LEFT (receiver.lastname, 1) AS receiver_lastname',
        'receiver.photo',
      ])
      .where('message.id = conversations.lastId')
      .orderBy('message.sendAt', 'DESC')
      .setParameter('userId', id)
      .execute();

    return lastMessages;
  }
}
