import { User } from './../../users/entities/user.entity';
import { Comment } from './../../comments/entities/comments.entity';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { required, string } from 'joi';

@Schema()
export class Publication extends Document {
  @Prop()
  tittle: string;
  @Prop({ required: true })
  content: string;
  @Prop()
  image: string;
  date: Date;
  @Prop(
    raw({
      name: { type: String },
      image: { type: String },
      email: { type: String },
    }),
  )
  user: User;
  // @Prop()
  // commment: Comment[];
}
export const PublicationSchema = SchemaFactory.createForClass(Publication);
