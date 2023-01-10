import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const userDB = await this.userService.findUserByEmail(email);
    const matched = comparePasswords(password, userDB.password);
    if (userDB && matched) {
      const { password, ...result } = userDB;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
