import { Message } from 'src/messages/entities/message.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  photo: string;

  @OneToMany(() => Message, (message: Message) => message.sender)
  sentMessages: Message[];

  @OneToMany(() => Message, (message: Message) => message.receiver)
  receivedMessages: Message[];
}
