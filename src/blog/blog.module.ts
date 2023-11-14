import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { BlogEntity } from 'src/entity/Blog/blog.entity';
import { ReplyEntity } from 'src/entity/Blog/reply.entity';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity]), CommentModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class BlogModule {}
