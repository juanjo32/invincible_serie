import { IsString, IsUrl, IsDate, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreatePublicationDto {
  @IsString({ message: 'El titulo de la publicacion debe ser un String' })
  @IsNotEmpty()
  readonly tittle: string;
  @IsString()
  @IsNotEmpty()
  readonly content: string;
  @IsUrl()
  readonly image: string;
  @IsDate({ message: 'La fecha de la publicacion debe ser de tipo Date' })
  readonly date: string;
}

export class UpdatePublicationDto extends PartialType(CreatePublicationDto) {}
