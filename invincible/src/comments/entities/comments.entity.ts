import { User } from './../../users/entities/user.entity';
import { Publication } from './../../publications/entities/publication.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Comment extends Document {
  @Prop({ required: true })
  content: string;
  @Prop({ type: Types.ObjectId, ref: User.name })
  user: User | Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
