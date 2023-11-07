import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from 'src/dto/blogsDTO/create.comment.dto';
import { CreateReplyDto } from 'src/dto/blogsDTO/create.reply.dto';
import { IComment } from 'src/interfaces/Blog-interface/comment.interface';
import { IReply } from 'src/interfaces/Blog-interface/reply.interface';

@Injectable()
export class CommentService {
  constructor(@InjectModel('Comment') private commentModel: Model<IComment>) {}

  // create comment
  async createComment(createCommentDto: CreateCommentDto): Promise<IComment> {
    const createdComment = await new this.commentModel(createCommentDto);
    return createdComment.save();
  }

  // Add a reply to a comment
  async addReply(
    commentId: string,
    createReplyDto: CreateReplyDto,
  ): Promise<IComment> {
    const comment = await this.commentModel.findById(commentId);
    if (!comment) {
      throw new NotFoundException('Comment not found.');
    }
    // Create an IReply object from the CreateReplyDto
    const newReply: IReply = {
      text: createReplyDto.text,
      name: createReplyDto.name,
      date: new Date(createReplyDto.date),
      email: createReplyDto.email,
      image: createReplyDto.image,
    };
    comment.replies.push(newReply);
    return comment.save();
  }

  // get comment by blog id
  async getCommentByBlog(blogId: string): Promise<IComment[]> {
    const commentData = await this.commentModel.find({ blogId });
    if (!commentData) {
      throw new NotFoundException('Comment not found.');
    }
    return commentData;
  }

  //   delete comment by id
  async deleteComment(commentId: string): Promise<void> {
    const deletedComment = await this.commentModel.findByIdAndDelete(commentId);
    if (!deletedComment) {
      throw new NotFoundException('Comment not found.');
    }
  }
}
