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
  ParseIntPipe,
} from '@nestjs/common';
import { CommentsService } from './../services/comments.service';
import { CreateCommentDto, UpdateCommentDto } from '../dtos/comments.dto';
import { ApiTags } from '@nestjs/swagger';
import { MongoidPipe } from './../../common/mongoid/mongoid.pipe';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  // @Get('')
  // getComments(@Query('limit') limit = 20, @Query('offset') offset = 1) {
  //   return {
  //     message: `limit comments ${limit} offset comment ${offset}`,
  //   };
  // }
  @Get('')
  getComments(@Query('limit') limit = 20, @Query('offset') offset = 1) {
    return this.commentsService.findAll();
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
  create(@Body() payload: CreateCommentDto) {
    return this.commentsService.create(payload);
  }
  @Put(':id')
  update(
    @Param('id', MongoidPipe) id: string,
    @Body() payload: UpdateCommentDto,
  ) {
    return this.commentsService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', MongoidPipe) id: string) {
    return this.commentsService.remove(id);
  }
}
