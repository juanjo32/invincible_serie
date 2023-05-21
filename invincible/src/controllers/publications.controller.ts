import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { PublicationsService } from './../services/publications.service';
import {
  CreatePublicationDto,
  UpdatePublicationDto,
} from './../dtos/publications.dtos';

@Controller('publications')
export class PublicationsController {
  constructor(private publicationsService: PublicationsService) {}
  @Get(':publicationId')
  getPublication(@Param('publicationId', ParseIntPipe) publicationId: number) {
    return this.publicationsService.findOne(publicationId);
  }
  //comentario de ayuda
  @Get()
  getPublications(@Query('limit') limit = 20, @Query('offset') offset = 1) {
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
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePublicationDto,
  ) {
    return this.publicationsService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.publicationsService.remove(id);
  }
}
