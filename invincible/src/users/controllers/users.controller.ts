import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('')
  getUsers() {
    //return this.usersService.findAll();
    return this.usersService.getUsers();
  }
  @Get(':id/publications')
  getPublications(@Param('id') id: string) {
    return this.usersService.getPublicationByUser(id);
  }
  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return {
      message: `User By Id ${userId} `,
    };
  }
  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
