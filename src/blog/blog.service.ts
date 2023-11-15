import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from 'src/dto/blogsDTO/create.blog.dto';
import { BlogEntity } from 'src/entity/Blog/blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogsRepository: Repository<BlogEntity>,
  ) {}

  // create blog for user-------------------
  async createBlog(blogCreateDto: CreateBlogDto): Promise<BlogEntity> {
    const createBlog = await this.blogsRepository.create(blogCreateDto);
    return this.blogsRepository.save(createBlog);
  }

  // find all Blog--------------------------
  async getAllBlog(): Promise<BlogEntity[]> {
    const blogData = await this.blogsRepository.find();
    if (!blogData || blogData.length == 0) {
      throw new NotFoundException(
        'Oh! sorry blog data not found. please try again!',
      );
    }
    return blogData;
  }

  // blog find by id for single blog -----------
  async singleBlog(blogId: number): Promise<BlogEntity> {
    try {
      console.log('Fetching blog with ID:', blogId);

      const getSingleBlog = await this.blogsRepository.findOne({
        where: { id: blogId },
      });

      if (!getSingleBlog) {
        throw new NotFoundException('Blog not found');
      }
      return getSingleBlog;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error; // Re-throw the error to ensure proper propagation
    }
  }

  // get blog data by category and all blog data
  async getCategoryBlog(
    category: string,
  ): Promise<{ allBlogs: BlogEntity[]; uniqueCategories: string[] }> {
    // Find all unique Categories
    const uniqueCategories: string[] = ['All'];
    const categoriesFromDatabase = await this.blogsRepository
      .createQueryBuilder()
      .select('DISTINCT(category)')
      .getRawMany();
    uniqueCategories.push(
      ...categoriesFromDatabase.map((entry) => entry.category),
    );

    if (!category) {
      // If no category is provided, return all blog posts
      const allBlogs = await this.blogsRepository.find();
      if (!allBlogs || allBlogs.length === 0) {
        throw new NotFoundException('No blog data found.');
      }
      return { allBlogs, uniqueCategories };
    } else {
      // If a category is provided, filter by category
      const getCategoryBlog = await this.blogsRepository.find({
        where: { category },
      });
      if (!getCategoryBlog || getCategoryBlog.length === 0) {
        throw new NotFoundException(
          `Oh! Sorry, no blog data found for category: ${category}. Please try again.`,
        );
      }
      return { allBlogs: getCategoryBlog, uniqueCategories };
    }
  }

  // get my blog
  async getMyBlogs(email: string): Promise<BlogEntity[]> {
    const myBlogs = await this.blogsRepository.find({ where: { email } });

    if (!myBlogs || myBlogs.length === 0) {
      throw new NotFoundException(
        'Oh! sorry blog data not found. Please try again!',
      );
    }
    return myBlogs;
  }

  // delete blog by id
  async deleteBlog(blogId: number): Promise<void> {
    console.log(blogId);
    const deletedBlog = await this.blogsRepository.delete(blogId);
    if (!deletedBlog) {
      throw new NotFoundException(
        'Oh! Sorry, the blog data you want to delete was not found.',
      );
    }
  }
}
