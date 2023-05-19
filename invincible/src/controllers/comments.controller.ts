import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  @Get('')
  getComments(@Query('limit') limit = 20, @Query('offset') offset = 1) {
    return `limit comments ${limit} offset comment ${offset}`;
  }
  @Get(':commentId')
  getComment(@Param() commentId: string) {
    return `comment id ${commentId}`;
  }
  @Get('/users/:userId')
  getCommentbyUser(@Param() userId: string) {
    return `user id by comment ${userId}`;
  }
}
