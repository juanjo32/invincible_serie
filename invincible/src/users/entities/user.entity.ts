import { Publication } from './../../publications/entities/publication.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  id: number;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  email: string;
  publications: Publication[];
}

export const UserSchema = SchemaFactory.createForClass(User);
