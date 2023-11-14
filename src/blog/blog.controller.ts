import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  Param,
  Query,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from 'src/dto/blogsDTO/create.blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // create blog for user---------------
  @Post('/create')
  async createBlog(@Res() response, @Body() createBlogDto: CreateBlogDto) {
    try {
      const newBlog = await this.blogService.createBlog(createBlogDto);
      return response.status(HttpStatus.CREATED).json({
        statusCode: 200,
        message: 'blog has been posted!',
        newBlog,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Oh! Sorry blog not posted.',
        error: 'Bad Request',
      });
    }
  }


  // blog find by id for single blog ---------
  @Get('/:id')
  async getSingleBlog(@Res() response, @Param('id') blogId: number) {
    try {
      const singleBlogData = await this.blogService.singleBlog(blogId);
      return response.status(HttpStatus.OK).send(singleBlogData);
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'oh! sorry single blog data not found.',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getCategoryBlog(@Res() response, @Query('category') category: string) {
    try {
      const categoryBlog = await this.blogService.getCategoryBlog(category);
      return response.status(HttpStatus.OK).send(categoryBlog);
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        message: error.message,
        error: 'Not Found',
      });
    }
  }

  // get my blogs
  @Get('/Myblog/all')
  async getMyBlog(@Res() response, @Query('email') email: string) {
    try {
      const getMyBlog = await this.blogService.getMyBlogs(email);
      return response.status(HttpStatus.OK).send(getMyBlog);
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        message: error.message,
        error: 'Not Found',
      });
    }
  }

  // delete blog by id

  @Delete('/:id')
  async deleteBlog(@Res() response, @Param('id') blogId: number) {
    try {
      await this.blogService.deleteBlog(blogId);
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'Blog Delete successfull',
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Oh! Sorry, the blog data you want to delete was not found.',
        error: 'Bad Request',
      });
    }
  }
}
