import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from 'src/dto/blogsDTO/create.comment.dto';
import { CreateReplyDto } from 'src/dto/blogsDTO/create.reply.dto';
import { CommentEntity } from 'src/entity/Blog/comment.entity';
import { Repository, FindOneOptions, FindManyOptions } from 'typeorm';
import { ReplyEntity } from 'src/entity/Blog/reply.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentsRepository: Repository<CommentEntity>,
    @InjectRepository(ReplyEntity)
    private readonly replyRepository: Repository<ReplyEntity>,
  ) {}

  async createComment(
    createCommentDto: CreateCommentDto,
  ): Promise<CommentEntity> {
    const { blogId, text, name, date, email, image } = createCommentDto;

    const createdComment = this.commentsRepository.create({
      blogId: Number(blogId), // Assuming blogId is a number
      text,
      name,
      date,
      email,
      image,
    });

    return this.commentsRepository.save(createdComment);
  }

  // Add a reply to a comment----------------------
  async addReply(
    commentId: number,
    createReplyDto: CreateReplyDto,
  ): Promise<CommentEntity> {
    const comment = await this.commentsRepository.findOne({
      where: { id: commentId },
    });
    console.log('working', comment);
    if (!comment) {
      throw new NotFoundException('Comment not found.');
    }

    const newReply = this.replyRepository.create({
      text: createReplyDto.text,
      name: createReplyDto.name,
      date: new Date(createReplyDto.date),
      email: createReplyDto.email,
      image: createReplyDto.image,
      comment, // Assign the comment to the reply
    });
    await this.replyRepository.save(newReply);

    // Refresh the comment's replies
    comment.replies = await this.replyRepository.find({ where: { comment } });

    return this.commentsRepository.save(comment);
  }

  // get reply by comment id
  async getCommentReply(commentId: number): Promise<ReplyEntity[]> {
    const replyData = await this.replyRepository.find({
      where: { commentId: commentId } as FindManyOptions<ReplyEntity>['where'],
    });

    if (!replyData || replyData.length === 0) {
      throw new NotFoundException('Replies not found for the given commentId.');
    }
    return replyData;
  }

  // get comment by blog id-------------------
  async getCommentByBlog(blogId: number): Promise<CommentEntity[]> {
    const commentData = await this.commentsRepository.find({
      where: { blogId },
    });
    if (!commentData) {
      throw new NotFoundException('Comment not found.');
    }
    return commentData;
  }

  //   delete comment by id------------------------
  async deleteComment(commentId: string): Promise<void> {
    const deletedComment = await this.commentsRepository.delete(commentId);
    if (!deletedComment) {
      throw new NotFoundException('Comment not found.');
    }
  }
}
