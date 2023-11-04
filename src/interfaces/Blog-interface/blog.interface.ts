import { Document } from 'mongoose';

export interface IBlog extends Document {
  readonly title: string;
  readonly content: string;
  readonly image: string;
  readonly category: string;
  readonly date: string;
  readonly email: string;
  readonly author: string;
}
