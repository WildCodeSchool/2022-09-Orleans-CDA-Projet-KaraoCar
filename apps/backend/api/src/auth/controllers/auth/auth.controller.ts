import { AuthService } from './../../services/auth/auth.service';
import { LocalAuthGuard } from './../../local-auth.guard';
import {
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
  Inject,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
