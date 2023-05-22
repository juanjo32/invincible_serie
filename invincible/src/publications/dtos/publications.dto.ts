import {
  IsString,
  IsUrl,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  min,
  Min,
  ValidateIf,
  ValidateNested,
  IsMongoId,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';
import { CreateUserDto } from './../../users/dtos/users.dto';

export class CreatePublicationDto {
  @IsString({ message: 'El titulo de la publicacion debe ser un String' })
  @IsNotEmpty()
  @ApiProperty()
  readonly tittle: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly content: string;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
  @IsDate({ message: 'La fecha de la publicacion debe ser de tipo Date' })
  @IsNotEmpty()
  @ApiProperty()
  readonly date: Date;
  // @IsNotEmpty()
  // @ValidateNested()
  // @ApiProperty()
  // readonly user: CreateUserDto;
  @IsNotEmpty()
  @IsMongoId()
  readonly user: string;
  // @IsNotEmpty()
  // readonly comments: Comment[];
}

export class UpdatePublicationDto extends PartialType(CreatePublicationDto) {}

export class FilterPublicationsDto {
  @IsOptional()
  @IsPositive()
  limit: number;
  @IsPositive()
  @IsOptional()
  @Min(0)
  offset: number;
  @IsOptional()
  @Min(0)
  minCharacter: number;
  @ValidateIf((params) => params.minCharacter)
  @IsPositive()
  maxCharacter: number;
}
