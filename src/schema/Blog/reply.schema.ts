import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Reply {
    
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
}

export const replySchema = SchemaFactory.createForClass(Reply);