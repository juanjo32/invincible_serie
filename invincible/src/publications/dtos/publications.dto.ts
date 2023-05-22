import { IsString, IsUrl, IsDate, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';
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
  readonly user: User;
  @IsNotEmpty()
  readonly comments: Comment[];
}

export class UpdatePublicationDto extends PartialType(CreatePublicationDto) {}
