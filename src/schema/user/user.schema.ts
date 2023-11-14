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
<<<<<<< HEAD
=======

  @Prop()
  role: string;

  @Prop()
  status: string;

  @Prop()
  bio: string;

  @Prop()
  birthday: string;

  @Prop()
  gender: string;
>>>>>>> 64152cce420c24137d03f09cb1e149fcc50ed727
}

export const userSchema = SchemaFactory.createForClass(User);
