import { User as UserEntity } from '../../../typeorm';
import { CreateUserDto } from './../../dto/CreateUser.dto';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from '../../types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: User[] = [
    {
      id: 1,
      username: 'anson',
      password: 'anson',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(CreateUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(CreateUserDto);
    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOneBy({ username });
  }
}
