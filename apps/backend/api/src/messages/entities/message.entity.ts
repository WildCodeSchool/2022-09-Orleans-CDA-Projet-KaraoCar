import { User } from 'src/user/user.entity';
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

  @Column()
  content: string;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  sender: User;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  receiver: User;

  @Column()
  readAt: Date;
}
