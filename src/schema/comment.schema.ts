import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comment {
  @Prop()
  text: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  date: string;

  @Prop()
  image: string;
}

export const commentSchema = SchemaFactory.createForClass(Comment);
