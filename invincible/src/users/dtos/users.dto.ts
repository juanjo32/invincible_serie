import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Publication } from '../../publications/entities/publication.entity';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;
  readonly publications: Publication[];
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
