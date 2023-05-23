import { Publication } from './../../publications/entities/publication.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  //No debe estallar el servidor
  name: string;
  @Prop({ required: false })
  image: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  verified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
