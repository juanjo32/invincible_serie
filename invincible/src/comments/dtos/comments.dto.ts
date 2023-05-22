import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';
export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly content: string;
  @ApiProperty()
  readonly user: User;
}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
