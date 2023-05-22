import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { User } from './../entities/user.entity';
import { ConfigService } from '@nestjs/config';
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
  ) {}
  private counterId = 1;
  private Users: User[] = [
    {
      id: 1,
      name: 'user 1',
      image: 'url',
      publications: [],
    },
  ];
  findAll() {
    return this.Users;
  }
  findOne(id: number) {
    const User = this.Users.find((item) => item.id === id);
    if (!User) {
      throw new NotFoundException(`Users ${id} does not exists`);
    }
    return User;
  }
  create(payload: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.Users.push(newUser);
    return newUser;
  }
  update(id: number, payload: UpdateUserDto) {
    const User = this.findOne(id);
    if (User) {
      const index = this.Users.findIndex((item) => item.id === id);
      this.Users[index] = {
        ...User,
        ...payload,
      };
      return this.Users[index];
    }
    return null;
  }
  remove(id: number) {
    const index = this.Users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.Users.splice(index, 1);
    return true;
  }
  getPublicationByUser(id: number): User {
    const user = this.findOne(id);
    return {
      id: 1,
      name: 'string',
      image: 'string',
      publications: this.publicationsService.findAll(),
    };
  }
  getUsers() {
    const pubsCollection = this.database.collection('users');
    return pubsCollection.find().toArray();
  }
}
