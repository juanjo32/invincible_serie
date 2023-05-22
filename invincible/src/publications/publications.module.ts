import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PublicationsController } from './controllers/publications.controller';
import { PublicationsService } from './services/publications.service';
import { CommentsModule } from '../comments/comments.module';
import { Publication, PublicationSchema } from './entities/publication.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Publication.name,
        schema: PublicationSchema,
      },
    ]),
    CommentsModule,
  ],
  // imports: [CommentsModule],
  controllers: [PublicationsController],
  providers: [PublicationsService],
  exports: [PublicationsService],
})
export class PublicationsModule {}
