import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  Post,
  Res,
  Get,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from 'src/dto/blogsDTO/create.comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  //   create comment
  @Post('/create')
  async createComment(
    @Res() response,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    try {
      const newComment =
        await this.commentService.createComment(createCommentDto);
      return response.status(HttpStatus.CREATED).json({
        statusCode: 201,
        message: 'Comment has been posted!',
        newComment,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Failed to post the comment.',
        error: 'Bad Request',
      });
    }
  }

  //   get comment by blog
  @Get('/:blogId')
  async getCommentByBlog(@Res() response, @Param('blogId') blogId: string) {
    try {
      const commentData = await this.commentService.getCommentByBlog(blogId);
      return response.status(HttpStatus.OK).send(commentData);
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'oh! sorry comment data not found.',
        error: 'Bad Request',
      });
    }
  }

  // delete comment by id

  @Delete('/:id')
  async deleteComment(@Res() response, @Param('id') commentId: string) {
    try {
      await this.commentService.deleteComment(commentId);
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'Comment deleted successfully',
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Failed to delete the comment.',
        error: 'Bad Request',
      });
    }
  }
}
