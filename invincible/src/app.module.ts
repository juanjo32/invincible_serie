import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PublicationsModule } from './publications/publications.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, PublicationsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
