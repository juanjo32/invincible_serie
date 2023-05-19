import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicationsController } from './controllers/publications.controller';
import { UsersController } from './controllers/users.controller';
import { CommentsController } from './controllers/comments.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    PublicationsController,
    UsersController,
    CommentsController,
  ],
  providers: [AppService],
})
export class AppModule {}
