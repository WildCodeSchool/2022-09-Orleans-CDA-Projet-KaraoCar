import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  firstname: string;

  @Column({
    nullable: false,
  })
  lastname: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({ type: 'text', nullable: true, default: null })
  description: string;

  @Column({
    nullable: true,
    default: null,
  })
  photo: string;

  @Column({
    nullable: true,
    default: null,
  })
  birthday: Date;

  @CreateDateColumn({
    nullable: true,
    default: null,
  })
  created_at: Date;

  @Column({
    nullable: true,
    default: null,
  })
  deleted_at: Date;
}
