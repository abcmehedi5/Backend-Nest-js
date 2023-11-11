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

  @Prop()
  role: string;

  @Prop()
  status: string;

  @Prop()
  bio: string;

  @Prop()
  birthday: string;
}

export const userSchema = SchemaFactory.createForClass(User);
