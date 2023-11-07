import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { commentSchema } from 'src/schema/Blog/comment.schema';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Comment', schema: commentSchema }]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class BlogModule {}
