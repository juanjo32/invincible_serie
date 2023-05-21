import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  @Get('')
  getComments(@Query('limit') limit = 20, @Query('offset') offset = 1) {
    return {
      message: `limit comments ${limit} offset comment ${offset}`,
    };
  }
  @Get(':commentId')
  @HttpCode(HttpStatus.ACCEPTED)
  getComment(@Param('commentId') commentId: string) {
    return {
      message: `comment id ${commentId}`,
    };
  }
  @Get('/users/:userId')
  getCommentbyUser(@Param() userId: string) {
    return {
      message: `user id by comment ${userId}`,
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
