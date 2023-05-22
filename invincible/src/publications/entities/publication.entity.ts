import { User } from './../../users/entities/user.entity';
import { Comment } from './../../comments/entities/comments.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { required } from 'joi';

@Schema()
export class Publication extends Document {
  @Prop()
  tittle: string;
  @Prop({ required: true })
  content: string;
  @Prop()
  image: string;
  date: Date;
  user: User;
  // @Prop()
  // commment: Comment[];
}
export const PublicationSchema = SchemaFactory.createForClass(Publication);
