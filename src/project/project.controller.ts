import { ProjectService } from './project.service';
import { Controller, Res, Get, HttpStatus } from '@nestjs/common';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  // get all data
  @Get()
  async getAllProjects(@Res() response) {
    try {
      const projectData = await this.projectService.getAllProjects();
      console.log(projectData);
      return response.status(HttpStatus.OK).json({
        message: 'all project find successfull',
        projectData,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'error student not found ',
        error: 'Bad Request',
      });
    }
  }
}
