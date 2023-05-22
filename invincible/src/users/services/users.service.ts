import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { User } from './../entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { Publication } from '../../publications/entities/publication.entity';
import { PublicationsService } from './../../publications/services/publications.service';
import { Db } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    private publicationsService: PublicationsService,
    private configService: ConfigService,
    @Inject('MONGO') private database: Db,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  findAll() {
    return this.userModel.find().exec();
  }
  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User ${id} does not exists`);
    }
    return user;
  }
  create(data: CreateUserDto) {
    const newPublication = new this.userModel(data);
    return newPublication.save();
  }
  update(id: string, changes: UpdateUserDto) {
    const user = this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException(`User ${id} does not exists`);
    }
    return user;
  }
  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
  async getPublicationByUser(id: string) {
    const user = this.findOne(id);
    return {
      id: 1,
      name: 'string',
      image: 'string',
      publications: await this.publicationsService.findAll(),
    };
  }
  getUsers() {
    const pubsCollection = this.database.collection('users');
    return pubsCollection.find().toArray();
  }
}
