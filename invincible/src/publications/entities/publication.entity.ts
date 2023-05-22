import { User } from './../../users/entities/user.entity';
import { Comment } from './../../comments/entities/comments.entity';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
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
  @Prop({ type: Types.ObjectId, ref: User.name })
  user: User | Types.ObjectId;
  // @Prop(
  //   raw({
  //     name: { type: String },
  //     image: { type: String },
  //     email: { type: String },
  //   }),
  // )
  // user: User;
  @Prop({ type: [{ type: Types.ObjectId, ref: Comment.name }] })
  comments: Types.Array<Comment>;
}
export const PublicationSchema = SchemaFactory.createForClass(Publication);
