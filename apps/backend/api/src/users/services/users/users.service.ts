import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { User as UserEntity } from '../../../typeorm';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from '../../types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: User[] = [
    {
      id: 1,
      firstname: 'John',
      password: 'anson',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(firstname: string) {
    return this.users.find((user) => user.firstname === firstname);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  async createUser(CreateUserDto: CreateUserDto) {
    if (CreateUserDto.password !== CreateUserDto.confirm_password) {
      throw new BadRequestException(
        'Password and confirm password do not match',
      );
    }
    const password = encodePassword(CreateUserDto.password);
    console.log(password);
    try {
      const newUser = this.userRepository.create({
        ...CreateUserDto,
        password,
      });

      return await this.userRepository.save(newUser);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  findUserByUsername(firstname: string) {
    return this.userRepository.findOneBy({ firstname });
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
}
