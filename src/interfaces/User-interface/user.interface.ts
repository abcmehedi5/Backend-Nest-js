import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly displayName: string;
  readonly image: string;
  readonly date: string;
  readonly email: string;
  readonly phoneNumber: string;
}
