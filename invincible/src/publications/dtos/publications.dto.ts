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
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
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
  // @IsNotEmpty()
  // readonly comments: Comment[];
}

export class UpdatePublicationDto extends PartialType(CreatePublicationDto) {}

export class FilterPublicationsDto {
  @IsOptional()
  @IsPositive()
  limit: number;
  @IsOptional()
  @Min(0)
  offset: number;
}
