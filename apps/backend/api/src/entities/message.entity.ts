import { User } from './user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sendAt: Date;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  sender: User;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  receiver: User;

  @Column({ nullable: true })
  readAt: Date;
}
