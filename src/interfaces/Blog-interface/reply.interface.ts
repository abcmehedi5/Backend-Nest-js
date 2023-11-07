// src/interfaces/Comment-interface/comment.interface.ts
import { Document } from 'mongoose';

export interface IReply{
  text: string;
  name: string;
  date: Date;
  email: string;
  image: string;
}
