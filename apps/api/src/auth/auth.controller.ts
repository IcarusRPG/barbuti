import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ChangePasswordDto, LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.service.login(body);
  }

  @Post('first-access/:userId')
  changePassword(@Param('userId') userId: string, @Body() body: ChangePasswordDto) {
    return this.service.firstAccessChangePassword(userId, body);
  }
}
