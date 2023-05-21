import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  readonly content: string;
}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
