import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comments.controller';
import { CommentsService } from './services/comments.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
