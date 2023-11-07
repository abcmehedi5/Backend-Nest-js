import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comment {
  @Prop()
  blogId: string;

  @Prop()
  text: string;

  @Prop()
  name: string;

  @Prop()
  date: string;

  @Prop()
  email: string;

  @Prop()
  image: string;

  @Prop()
  replies: [];
}

export const commentSchema = SchemaFactory.createForClass(Comment);
