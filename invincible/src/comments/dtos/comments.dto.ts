import { IsString, IsNotEmpty, IsMongoId } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';
export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  readonly content: string;
  @IsNotEmpty()
  @IsMongoId()
  readonly user: string;
}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
