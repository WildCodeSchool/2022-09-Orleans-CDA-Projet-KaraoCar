import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import {
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
  Get,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const login = await this.authService.login(req.user);
    const NODE_ENV = this.configService.get('NODE_ENV') || 'development';
    res.cookie('jwt', login.token, {
      httpOnly: true,
      sameSite: true,
      secure: NODE_ENV === 'production',
      signed: true,
    });
    return { message: 'connection succesful', status: 'SUCCESS' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
