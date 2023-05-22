import { User } from './../../users/entities/user.entity';
import { Publication } from './../../publications/entities/publication.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comment extends Document {
  id: number;
  @Prop({ required: true })
  content: string;
  @Prop({ required: true })
  user: User;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
