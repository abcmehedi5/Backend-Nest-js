import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from 'src/dto/blogsDTO/create.comment.dto';
import { IComment } from 'src/interfaces/Blog-interface/comment.interface';

@Injectable()
export class CommentService {
  constructor(@InjectModel('Comment') private commentModel: Model<IComment>) {}

  // create comment
  async createComment(createCommentDto: CreateCommentDto): Promise<IComment> {
    const createdComment = await new this.commentModel(createCommentDto);
    return createdComment.save();
  }

  // get comment by blog id
  async getCommentByBlog(blogId:string): Promise<IComment[]> {
    const commentData = await this.commentModel.find({blogId});
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
