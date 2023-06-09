import {
  IsString,
  IsUrl,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,
  ValidateNested,
  IsMongoId,
  IsArray,
  IsBoolean,
} from 'class-validator';
import { PartialType, OmitType } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';
import { CreateUserDto } from 'src/users/dtos/users.dto';
export class CreatePublicationDto {
  @IsString({ message: 'El titulo de la publicacion debe ser un String' })
  @IsNotEmpty()
  readonly tittle: string;
  @IsString()
  @IsNotEmpty()
  readonly content: string;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
  @IsDate({ message: 'La fecha de la publicacion debe ser de tipo Date' })
  @IsNotEmpty()
  readonly date: Date;
  @IsNotEmpty()
  @IsMongoId()
  readonly user: string;
  @IsArray()
  @IsNotEmpty()
  readonly comments: string[];
  @IsBoolean()
  @IsNotEmpty()
  readonly isNovedad: boolean;
}

export class UpdatePublicationDto extends PartialType(
  OmitType(CreatePublicationDto, ['comments']),
) {}

export class FilterPublicationsDto {
  @IsOptional()
  @IsPositive()
  limit: number;
  @IsOptional()
  @Min(0)
  offset: number;
}
