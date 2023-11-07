import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectController } from './project/project.controller';
import { projectSchema } from './schema/project.schema';
import { ProjectService } from './project/project.service';
import { BlogService } from './blog/blog.service';
import { BlogController } from './blog/blog.controller';
import { blogSchema } from './schema/Blog/blog.schema';
import { commentSchema } from './schema/Blog/comment.schema';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'Pro-edu',
    }),
    MongooseModule.forFeature([{ name: 'Project', schema: projectSchema }]),
    MongooseModule.forFeature([{ name: 'Blog', schema: blogSchema }]),
    BlogModule,
  ],
  controllers: [AppController, ProjectController, BlogController],
  providers: [AppService, ProjectService, BlogService],
})
export class AppModule {}
