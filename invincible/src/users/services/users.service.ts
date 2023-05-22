import { Injectable, NotFoundException, Inject, Query } from '@nestjs/common';
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
  // private counterId = 1;
  // private Users: User[] = [
  //   {
  //     id: 1,
  //     name: 'user 1',
  //     image: 'url',
  //     email: 'ee.com',
  //     publications: [],
  //   },
  // ];
  findAll() {
    return this.userModel.find().exec();
  }
  // findOne(id: number) {
  //   const User = this.Users.find((item) => item.id === id);
  //   if (!User) {
  //     throw new NotFoundException(`Users ${id} does not exists`);
  //   }
  //   return User;
  // }
  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`Publications ${id} does not exists`);
    }
    return user;
  }
  // create(payload: CreateUserDto) {
  //   this.counterId = this.counterId + 1;
  //   const newUser = {
  //     id: this.counterId,
  //     ...payload,
  //   };
  //   this.Users.push(newUser);
  //   return newUser;
  // }
  create(data: CreateUserDto) {
    const newUser = new this.userModel(data);
    return newUser.save();
  }
  // update(id: number, payload: UpdateUserDto) {
  //   const User = this.findOne(id);
  //   if (User) {
  //     const index = this.Users.findIndex((item) => item.id === id);
  //     this.Users[index] = {
  //       ...User,
  //       ...payload,
  //     };
  //     return this.Users[index];
  //   }
  //   return null;
  // }
  update(id: string, changes: UpdateUserDto) {
    const user = this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException(`Publications ${id} does not exists`);
    }
    return user;
  }
  // remove(id: number) {
  //   const index = this.Users.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`User #${id} not found`);
  //   }
  //   this.Users.splice(index, 1);
  //   return true;
  // }
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
