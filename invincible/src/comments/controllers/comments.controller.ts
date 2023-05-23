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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MongoidPipe } from 'src/common/mongoid/mongoid.pipe';
@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  @ApiOperation({ summary: 'List of comments ' })
  getComments() {
    return this.commentsService.findAll();
  }
  @Get(':commentId')
  getComment(@Param('commentId') commentId: string) {
    return this.commentsService.findOne(commentId);
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
