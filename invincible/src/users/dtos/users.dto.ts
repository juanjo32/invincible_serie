import {
  IsString,
  IsUrl,
  IsNotEmpty,
  IsArray,
  IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { Publication } from '../../publications/entities/publication.entity';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsUrl()
  readonly image: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsBoolean()
  @IsNotEmpty()
  readonly verified: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
