import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './../entities/comments.entity';

import { CreateCommentDto, UpdateCommentDto } from './../dtos/comments.dtos';
@Injectable()
export class CommentsService {
  private counterId = 1;
  private comments: Comment[] = [
    {
      id: 1,
      content: 'Deproto es o depronto no es',
      user: {
        id: 1,
        name: 'user 1',
        image: 'url',
        publications: [],
      },
    },
  ];
  findAll() {
    return this.comments;
  }
  findOne(id: number) {
    const Comment = this.comments.find((item) => item.id === id);
    if (!Comment) {
      throw new NotFoundException(`comments ${id} does not exists`);
    }
    return Comment;
  }
  create(payload: CreateCommentDto) {
    this.counterId = this.counterId + 1;
    const newComment = {
      id: this.counterId,
      ...payload,
    };
    this.comments.push(newComment);
    return newComment;
  }
  update(id: number, payload: UpdateCommentDto) {
    const Comment = this.findOne(id);
    if (Comment) {
      const index = this.comments.findIndex((item) => item.id === id);
      this.comments[index] = {
        ...Comment,
        ...payload,
      };
      return this.comments[index];
    }
    return null;
  }
  remove(id: number) {
    const index = this.comments.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Comment #${id} not found`);
    }
    this.comments.splice(index, 1);
    return true;
  }
}
