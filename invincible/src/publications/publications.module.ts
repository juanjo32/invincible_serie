import { Module } from '@nestjs/common';
import { PublicationsController } from './controllers/publications.controller';
import { PublicationsService } from './services/publications.service';
import { CommentsModule } from '../comments/comments.module';

@Module({
  imports: [CommentsModule],
  controllers: [PublicationsController],
  providers: [PublicationsService],
  exports: [PublicationsService],
})
export class PublicationsModule {}
