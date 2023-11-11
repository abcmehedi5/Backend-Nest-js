import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  displayName: string;

  @Prop()
  email: string;

  @Prop()
  date: string;

  @Prop()
  image: string;

  @Prop()
  phoneNumber: string;
}

export const userSchema = SchemaFactory.createForClass(User);
