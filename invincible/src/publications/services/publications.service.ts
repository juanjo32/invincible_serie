import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Publication } from './../entities/publication.entity';
import {
  CreatePublicationDto,
  UpdatePublicationDto,
  FilterPublicationsDto,
} from './../dtos/publications.dto';
import { CreateCommentDto } from '../../comments/dtos/comments.dto';
import { Comment } from '../../comments/entities/comments.entity';
@Injectable()
export class PublicationsService {
  constructor(
    @InjectModel(Publication.name) private publicationModel: Model<Publication>,
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}
  findAll(params?: FilterPublicationsDto) {
    if (params) {
      const { limit, offset } = params;
      return this.publicationModel
        .find()
        .populate('user')
        .populate('comments')
        .populate({ path: 'comments', populate: 'user' })
        .skip(offset)
        .limit(limit)
        .exec();
    }
    return this.publicationModel
      .find()
      .populate('user')
      .populate('comments')
      .populate({ path: 'comments', populate: 'user' })
      .exec();
  }
  async findOne(id: string) {
    const publication = await this.publicationModel
      .findById(id)
      .populate('user')
      .populate('comments')
      .populate({ path: 'comments', populate: 'user' })
      .exec();
    if (!publication) {
      throw new NotFoundException(`Publications ${id} does not exists`);
    }
    return publication.populate('user');
  }
  async findOn(id: string) {
    const publication = await this.publicationModel
      .findOne({ _id: id })
      .populate('user')
      .populate('comments')
      .populate({ path: 'comments', populate: 'user' })
      .exec();
    if (!publication) {
      throw new NotFoundException(`Publications ${id} does not exists`);
    }
    return publication.populate('user');
  }
  async getPublicationWithComments(
    publicationId: string,
  ): Promise<Publication> {
    return this.publicationModel
      .findById(publicationId)
      .populate('user')
      .populate('comments')
      .populate({ path: 'comments', populate: 'user' })
      .exec();
  }
  create(data: CreatePublicationDto) {
    const newPublication = new this.publicationModel(data);
    return newPublication.save();
  }
  // async createComment(publicationId: string, data: CreateCommentDto) {
  //   const Publication = await this.findOne(publicationId);
  //   if (!Publication) {
  //     throw new NotFoundException(
  //       `Publication with ${publicationId} does not exists`,
  //     );
  //   }
  //   const newComment = new this.commentModel(data);
  //   Publication.comments.push(newComment);
  //   newComment.save();
  //   await Publication.save();
  //   return newComment;
  // }
  async createComment(publicationId: string, data: CreateCommentDto) {
    const Publication = await this.findOne(publicationId);
    if (!Publication) {
      throw new NotFoundException(
        `Publication with ${publicationId} does not exists`,
      );
    }

    const newComment = new this.commentModel(data);
    Publication.comments.push(newComment);

    await this.saveComment(newComment);
    await this.savePublication(Publication);

    return newComment;
  }

  private async saveComment(comment: Comment) {
    try {
      await comment.save();
    } catch (error) {
      throw new InternalServerErrorException(
        `Error saving comment: ${error.message}`,
      );
    }
  }

  private async savePublication(publication: Publication) {
    try {
      await publication.save();
    } catch (error) {
      throw new InternalServerErrorException(
        `Error saving publication: ${error.message}`,
      );
    }
  }
  update(id: string, changes: UpdatePublicationDto) {
    const publication = this.publicationModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!publication) {
      throw new NotFoundException(`Publications ${id} does not exists`);
    }
    return publication;
  }
  remove(id: string) {
    return this.publicationModel.findByIdAndDelete(id);
  }
}
