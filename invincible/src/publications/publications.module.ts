import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PublicationsController } from './controllers/publications.controller';
import { PublicationsService } from './services/publications.service';
import { CommentsModule } from '../comments/comments.module';
import { Publication, PublicationSchema } from './entities/publication.entity';
import { CommentSchema } from '../comments/entities/comments.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Publication.name,
        schema: PublicationSchema,
      },
    ]),
    MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }]),
    CommentsModule,
  ],
  // imports: [CommentsModule],
  controllers: [PublicationsController],
  providers: [PublicationsService],
  exports: [PublicationsService],
})
export class PublicationsModule {}
