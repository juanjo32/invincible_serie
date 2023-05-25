import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './../entities/comments.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto, UpdateCommentDto } from '../dtos/comments.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}
  findAll() {
    return this.commentModel.find().populate('user').exec();
  }
  async findOne(id: string) {
    const Comment = await this.commentModel
      .findById(id)
      // .populate('user')
      // .populate('comments')
      // .populate({ path: 'comments', populate: 'user' })
      .exec();
    if (!Comment) {
      throw new NotFoundException(`comments ${id} does not exists`);
    }
    return Comment;
  }
  async findComments(publicationId: string) {
    const comments = await this.commentModel.find({ publicationId });
    comments.forEach(async (comment) => {
      comment.user = await comment.populate('name');
    });

    return comments;
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
