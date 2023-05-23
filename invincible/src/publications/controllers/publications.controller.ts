import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PublicationsService } from './../services/publications.service';
import {
  CreatePublicationDto,
  UpdatePublicationDto,
  FilterPublicationsDto,
} from '../dtos/publications.dto';
import { MongoidPipe } from './../../common/mongoid/mongoid.pipe';

@ApiTags('publications')
@Controller('publications')
export class PublicationsController {
  constructor(private publicationsService: PublicationsService) {}
  @Get(':publicationId')
  getPublication(@Param('publicationId') publicationId: string) {
    return this.publicationsService.findOne(publicationId);
  }
  @Get()
  @ApiOperation({ summary: 'List of publications ' })
  getPublications(@Query() params: FilterPublicationsDto) {
    return this.publicationsService.findAll(params);
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
    @Param('id', MongoidPipe) id: string,
    @Body() payload: UpdatePublicationDto,
  ) {
    return this.publicationsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', MongoidPipe) id: string) {
    return this.publicationsService.remove(id);
  }
}
