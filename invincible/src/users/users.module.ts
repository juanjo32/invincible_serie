import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { PublicationsModule } from '../publications/publications.module';
import { CommentsModule } from '../comments/comments.module';
@Module({
  imports: [PublicationsModule, CommentsModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
