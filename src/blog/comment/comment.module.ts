import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CommentEntity } from 'src/entity/Blog/comment.entity';
import { ReplyEntity } from 'src/entity/Blog/reply.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CommentEntity,ReplyEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
  })
export class CommentModule {}
