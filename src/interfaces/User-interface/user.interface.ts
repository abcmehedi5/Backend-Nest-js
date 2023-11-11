import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly displayName: string;
  readonly image: string;
  readonly date: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly role: string;
  readonly status: string;
  readonly bio: string;
  readonly birthday: string;
}
