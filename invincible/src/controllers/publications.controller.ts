import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('publications')
export class PublicationsController {
  @Get(':publicationId')
  getPublication(@Param('publicationId') publicationId: string) {
    return `Publication ${publicationId}`;
  }
  //comentario de ayuda
  @Get()
  getPublications(@Query('limit') limit = 20, @Query('offset') offset = 1) {
    return `products: limit=> ${limit} offset=> ${offset} `;
  }

  @Get('users/:userId')
  getPublicationsByUser(@Param('userId') userId: string) {
    return `publication by user ${userId}`;
  }
  @Get('comments')
  getCommments() {
    return `Comentarios de la publicacion`;
  }
  @Get('comments/gonorreas')
  getCommmentsGonorreas() {
    return `Comentarios gonorreas de la publicacion`;
  }
}
