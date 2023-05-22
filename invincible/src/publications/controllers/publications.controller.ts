import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PublicationsService } from './../services/publications.service';
import {
  CreatePublicationDto,
  UpdatePublicationDto,
} from '../dtos/publications.dto';

@ApiTags('publications')
@Controller('publications')
export class PublicationsController {
  constructor(private publicationsService: PublicationsService) {}
  @Get(':publicationId')
  getPublication(@Param('publicationId') publicationId: string) {
    return this.publicationsService.findOne(publicationId);
  }
  @Get()
  getPublications() {
    return this.publicationsService.findAll();
  }

  @Get('users/:userId')
  getPublicationsByUser(@Param('userId') userId: string) {
    return {
      message: `publication by user ${userId}`,
    };
  }
  @Get('comments')
  getCommments() {
    return {
      message: `Comentarios de la publicacion`,
    };
  }
  @Get('comments/gonorreas')
  getCommmentsGonorreas() {
    return {
      message: `Comentarios gonorreas de la publicacion`,
    };
  }
  @Post()
  create(@Body() payload: CreatePublicationDto) {
    return this.publicationsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdatePublicationDto) {
    return this.publicationsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.publicationsService.remove(id);
  }
}
