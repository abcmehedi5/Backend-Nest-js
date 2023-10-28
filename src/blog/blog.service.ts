import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IBlog } from 'src/interfaces/Blog-interface/blog.interface';
import { CreateBlogDto } from 'src/dto/blogsDTO/create.blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Blog') private blogModel: Model<IBlog>) {} // IBlog means blog interface

  // create blog for user-------------------
  async createBlog(blogCreateDto: CreateBlogDto): Promise<IBlog> {
    const createBlog = await new this.blogModel(blogCreateDto);
    return createBlog.save();
  }

  // find all Blog--------------------------
  async getAllBlog(): Promise<IBlog[]> {
    const blogData = await this.blogModel.find();
    if (!blogData || blogData.length == 0) {
      throw new NotFoundException(
        'Oh! sorry blog data not found. please try again!',
      );
    }
    return blogData;
  }

  // blog find by id for single blog -----------
  async singleBlog(blogId: string): Promise<IBlog> {
    const getSingleBlog = await this.blogModel.findById(blogId);
    if (!getSingleBlog) {
      throw new NotFoundException(
        'Oh! sorry blog data not found. please try again!',
      );
    }
    return getSingleBlog;
  }

  // get blog data by category and all blog data
  async getCategoryBlog(
    category: string,
  ): Promise<{ allBlogs: IBlog[]; uniqueCategories: string[] }> {
    // find all unique Categories
    const uniqueCategories: string[] = ['All'];
    const categoriesFromDatabase = await this.blogModel.distinct('category');
    uniqueCategories.push(...categoriesFromDatabase);

    if (!category) {
      // If no category is provided, return all blog posts
      const allBlogs = await this.blogModel.find();
      if (!allBlogs || allBlogs.length === 0) {
        throw new NotFoundException('No blog data found.');
      }
      return { allBlogs, uniqueCategories };
    } else {
      // If a category is provided, filter by category
      const getCategoryBlog = await this.blogModel.find({ category });
      if (!getCategoryBlog || getCategoryBlog.length === 0) {
        throw new NotFoundException(
          `Oh! Sorry, no blog data found for category: ${category}. Please try again.`,
        );
      }
      return { allBlogs: getCategoryBlog, uniqueCategories };
    }
  }
}
