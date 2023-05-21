import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('publications')
export class PublicationsController {
  @Get(':publicationId')
  getPublication(@Param('publicationId') publicationId: string) {
    return {
      message: `Publication ${publicationId}`,
    };
  }
  //comentario de ayuda
  @Get()
  getPublications(@Query('limit') limit = 20, @Query('offset') offset = 1) {
    return {
      message: `products: limit=> ${limit} offset=> ${offset} `,
    };
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
  create(@Body() payload: any) {
    return {
      message: 'crear',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
