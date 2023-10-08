import { ProjectCreateDto } from 'src/dto/projectsDTO/create.project.dto';
import { ProjectService } from './project.service';
import {
  Controller,
  Res,
  Get,
  Post,
  Body,
  Delete,
  Param,
  HttpStatus,
} from '@nestjs/common';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  // Create project
  @Post()
  async createProject(
    @Res() response,
    @Body() projectCreateDto: ProjectCreateDto,
  ) {
    try {
      const newProject = this.projectService.createProject(projectCreateDto);
      return response.status(HttpStatus.CREATED).json({
        statusCode: 200,
        message: 'project create has been succesfull',
        newProject,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'error project not create ',
        error: 'Bad Request',
      });
    }
  }

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

  @Delete('/:id')
  async deleteProject(@Res() response, @Param('id') projectId: string) {
    try {
      const deleteProject = await this.projectService.deleteProject(projectId);
      return response.status(HttpStatus.OK).json({
        message: 'Student delete  successfull',
        deleteProject,
      });
    } catch (error) {
      return response.status(HttpStatus.OK).json({
        statusCode: 400,
        message: 'project delete not found',
        error: 'Bad Request',
      });
    }
  }
}
