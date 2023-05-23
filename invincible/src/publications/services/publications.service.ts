import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Publication } from './../entities/publication.entity';
import {
  CreatePublicationDto,
  UpdatePublicationDto,
  FilterPublicationsDto,
} from './../dtos/publications.dto';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectModel(Publication.name) private publicationModel: Model<Publication>,
  ) {}
  findAll(params?: FilterPublicationsDto) {
    if (params) {
      const { limit, offset } = params;
      return this.publicationModel
        .find()
        .populate('user')
        .populate('comments')
        .skip(offset)
        .limit(limit)
        .exec();
    }
    return this.publicationModel
      .find()
      .populate('user')
      .populate('comments')
      .exec();
  }
  async findOne(id: string) {
    const publication = await this.publicationModel.findById(id).exec();
    if (!publication) {
      throw new NotFoundException(`Publications ${id} does not exists`);
    }
    return publication;
  }
  create(data: CreatePublicationDto) {
    const newPublication = new this.publicationModel(data);
    return newPublication.save();
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
