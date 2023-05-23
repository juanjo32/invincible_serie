import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { PublicationsModule } from '../publications/publications.module';
import { CommentsModule } from '../comments/comments.module';
import { User, UserSchema } from './entities/user.entity';
@Module({
  imports: [
    PublicationsModule,
    CommentsModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
