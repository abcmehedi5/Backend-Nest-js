import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogService } from './blog/blog.service';
import { BlogController } from './blog/blog.controller';
import { BlogModule } from './blog/blog.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './entity/Blog/blog.entity'; // Import your entities
import { CommentEntity } from './entity/Blog/comment.entity';
import { UserEntity } from './entity/User/user.entity';
import { ReplyEntity } from './entity/Blog/reply.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'hisanmastery',
      entities: [BlogEntity, CommentEntity, ReplyEntity, UserEntity],
      synchronize: true,
    }),
    BlogModule,
    UserModule,
  ],
  controllers: [AppController, BlogController, UserController],
  providers: [AppService, BlogService, UserService],
})
export class AppModule {}
