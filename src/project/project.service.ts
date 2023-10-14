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

  // delete project
  async deleteProject(projectId: string): Promise<IProject> {
    const deleteProject = await this.projectModel.findByIdAndDelete(projectId);
    if (!deleteProject) {
      throw new NotFoundException('project delete not found');
    }
    return deleteProject;
  }

  // single projects get

  async getSingleProject(projectId: string): Promise<IProject> {
    const singleProject = await this.projectModel.findById(projectId);
    if (!singleProject) {
      throw new NotFoundException('project data not found');
    }

    return singleProject;
  }
}
