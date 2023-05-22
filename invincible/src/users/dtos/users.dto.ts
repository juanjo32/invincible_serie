import { IsString, IsUrl, IsNotEmpty, IsArray } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { Publication } from '../../publications/entities/publication.entity';
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
  @IsArray()
  @IsNotEmpty()
  readonly publications: string[];
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
