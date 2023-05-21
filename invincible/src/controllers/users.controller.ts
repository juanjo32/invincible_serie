import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('')
  getUsers() {
    return {
      message: `Users`,
    };
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
  create(@Body() payload: any) {
    return {
      message: 'crear',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
