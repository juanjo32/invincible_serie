import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicationsController } from './controllers/publications.controller';
import { UsersController } from './controllers/users.controller';
import { CommentsController } from './controllers/comments.controller';
import { CommentsService } from './services/comments.service';
import { PublicationsService } from './services/publications.service';
import { UsersService } from './services/users.service';
import { UsersModule } from './users/users.module';
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [UsersModule, PublicationsModule],
  controllers: [
    AppController,
    PublicationsController,
    UsersController,
    CommentsController,
  ],
  providers: [AppService, CommentsService, PublicationsService, UsersService],
})
export class AppModule {}
