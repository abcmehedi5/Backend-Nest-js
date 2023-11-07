// src/interfaces/Comment-interface/comment.interface.ts
import { Document } from 'mongoose';

export interface IComment extends Document {
  blogId: string;
  text: string;
  name: string;
  date: string;
  email: string;
  image: string;
  replies: [];
}
