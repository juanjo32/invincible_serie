import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './../services/auth.service';
import { User } from './../../users/entities/user.entity';
@Controller('auth')
export class AuthController {
  //local is the strategy
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    const user = req.user as User;
    return this.authService.generateJWT(user);
  }
}
