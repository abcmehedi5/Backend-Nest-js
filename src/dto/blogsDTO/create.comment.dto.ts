// src/dto/commentsDTO/create.comment.dto.ts
export class CreateCommentDto {
  blogId: string;
  text: string;
  name: string;
  date: string;
  email: string;
  image: string;
  replies: [];
}
