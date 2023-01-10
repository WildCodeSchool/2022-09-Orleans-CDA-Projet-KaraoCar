import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sendAt: Date;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => User, (user: User) => user.sentMessages)
  sender: User;

  @ManyToOne(() => User, (user: User) => user.receivedMessages)
  receiver: User;

  @Column({ nullable: true })
  readAt: Date;
}
