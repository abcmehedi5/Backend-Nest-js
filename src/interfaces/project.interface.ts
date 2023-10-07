import { Document } from 'mongoose';

export interface IProject extends Document {
  readonly title: string;
  readonly description: string;
  readonly liveLink: string;
  readonly githubClient: string;
  readonly githubServer: string;
  readonly image: string;
}
