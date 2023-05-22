import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './../entities/comments.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto, UpdateCommentDto } from '../dtos/comments.dto';

@Injectable()
export class CommentsService {
  // private counterId = 1;
  // private comments: Comment[] = [
  //   {
  //     id: 1,
  //     content: 'Deproto es o depronto no es',
  //     user: {
  //       id: 1,
  //       name: 'user 1',
  //       image: 'url',
  //       email: 'gmail.com',
  //       publications: [],
  //     },
  //   },
  // ];
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}
  findAll() {
    return this.commentModel.find().exec();
  }
  async findOne(id: string) {
    const Comment = this.commentModel.findById(id).exec();
    if (!Comment) {
      throw new NotFoundException(`comments ${id} does not exists`);
    }
    return Comment;
  }
  create(data: CreateCommentDto) {
    const newComment = new this.commentModel(data);
    return newComment.save();
  }
  update(id: string, changes: UpdateCommentDto) {
    const Comment = this.commentModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!Comment) {
      throw new NotFoundException(`comments ${id} does not exists`);
    }
    return Comment;
  }

  remove(id: string) {
    return this.commentModel.findByIdAndDelete(id);
  }
}
