import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Blog {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  category: string;

  @Prop()
  date: string;

  @Prop()
  author: string;

  @Prop()
  image: string;
}

export const blogSchema = SchemaFactory.createForClass(Blog);
