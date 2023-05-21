import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Publication } from './../../publications/entities/publication.entity';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  readonly publications: Publication[];
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
