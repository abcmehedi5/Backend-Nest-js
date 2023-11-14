import { IReply } from './reply.interface';
export interface IComment extends Document {
  readonly blogId: string;
  readonly text: string;
  readonly name: string;
  readonly date: string;
  readonly email: string;
  readonly image: string;
  readonly replies: [IReply];
}
