// src/interfaces/Comment-interface/comment.interface.ts
import { Document } from 'mongoose';

export interface IComment extends Document {
  text: string;
  blogId: string;
  image: string;
  email: string;
}
