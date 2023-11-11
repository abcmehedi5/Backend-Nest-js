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
import { BlogModule } from './blog/blog.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { userSchema } from './schema/user/user.schema';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://development:development@cluster0.mbjz2.mongodb.net/?retryWrites=true&w=majority',
      // process.env.DATABASE_URL,
      {
        dbName: 'hisanmastery',
      },
    ),
    MongooseModule.forFeature([{ name: 'Project', schema: projectSchema }]),
    MongooseModule.forFeature([{ name: 'Blog', schema: blogSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    BlogModule,
  ],
  controllers: [AppController, ProjectController, BlogController, UserController],
  providers: [AppService, ProjectService, BlogService, UserService],
})
export class AppModule {}
