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

import { UsersService } from './../services/users.service';
import { CreateUserDto, UpdateUserDto } from './../dtos/users.dtos';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('')
  getUsers() {
    return this.usersService.findAll();
  }
  @Get(':id/publications/:publicationId')
  getUsersbypublication(
    @Param('publicationId') publicationId: string,
    @Param('id') id: string,
  ) {
    return {
      message: `Publication ${publicationId} and id ${id}`,
    };
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
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.usersService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
