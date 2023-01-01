import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
  })
  firstname: string;

  @Column({
    nullable: false,
    default: '',
  })
  lastname: string;

  @Column({
    name: 'email',
    nullable: false,
    default: '',
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @Column({
    nullable: true,
    default: '',
  })
  description: string;

  @Column({
    nullable: true,
    default: '',
  })
  photo: string;

  @Column({
    nullable: true,
    default: null,
  })
  birthday: Date;

  @Column({
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
