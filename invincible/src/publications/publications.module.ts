import { Module } from '@nestjs/common';
import { PublicationsController } from './controllers/publications.controller';
import { PublicationsService } from './services/publications.service';

@Module({
  controllers: [PublicationsController],
  providers: [PublicationsService],
})
export class PublicationsModule {}
