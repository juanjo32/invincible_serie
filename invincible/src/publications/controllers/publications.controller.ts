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
  UseGuards,
  InternalServerErrorException,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PublicationsService } from './../services/publications.service';
import {
  CreatePublicationDto,
  UpdatePublicationDto,
  FilterPublicationsDto,
} from '../dtos/publications.dto';
import { MongoidPipe } from './../../common/mongoid/mongoid.pipe';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Public } from './../../auth/decorators/public.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { CreateCommentDto } from 'src/comments/dtos/comments.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('publications')
@Controller('publications')
export class PublicationsController {
  constructor(private publicationsService: PublicationsService) {}
  // @Public()
  // @Get(':publicationId')
  // getPublication(@Param('publicationId') publicationId: string) {
  //   return this.publicationsService.findOne(publicationId);
  // }
  @Public()
  @Get()
  @ApiOperation({ summary: 'List of publications ' })
  getPublications(@Query() params: FilterPublicationsDto) {
    return this.publicationsService.findAll(params);
  }
  @Public()
  @Get(':id')
  async getPublication(@Param('id') id: string) {
    const publication =
      await this.publicationsService.getPublicationWithComments(id);
    return publication;
  }
  @Get('users/:userId')
  getPublicationsByUser(@Param('userId') userId: string) {
    return {
      message: `publication by user ${userId}`,
    };
  }
  @Public()
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
  @Post(':publicationId/comments')
  async createComment(
    @Param('publicationId') publicationId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    try {
      await this.publicationsService.createComment(
        publicationId,
        createCommentDto,
      );
      return { message: 'Comment created successfully' };
    } catch (error) {
      // Handle any potential errors
      throw new InternalServerErrorException('Failed to create comment');
    }
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
