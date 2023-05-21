import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { User } from './../../users/entities/user.entity';
export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  readonly content: string;
  readonly user: User;
}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
