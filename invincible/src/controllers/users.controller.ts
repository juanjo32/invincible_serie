import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('')
  getUsers() {
    return `Users`;
  }
  @Get(':id/publications/:publicationId')
  getUsersbypublication(
    @Param('publicationId') publicationId: string,
    @Param('id') id: string,
  ) {
    return `Publication ${publicationId} and id ${id}`;
  }
  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return `User By Id ${userId} `;
  }
}
