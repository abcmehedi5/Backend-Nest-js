import { ProjectCreateDto } from './../dto/projectsDTO/create.project.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProject } from 'src/interfaces/project.interface';
@Injectable()
export class ProjectService {
  constructor(@InjectModel('Project') private projectModel: Model<IProject>) {}

  // create projects

  async createProject(projectCreateDto: ProjectCreateDto): Promise<IProject> {
    const newProject = await new this.projectModel(projectCreateDto);
    return newProject.save();
  }

  //   find all projects
  async getAllProjects(): Promise<IProject[]> {
    const projectData = await this.projectModel.find();

    if (!projectData || projectData.length == 0) {
      throw new NotFoundException('project data not found');
    }

    return projectData;
  }
}
