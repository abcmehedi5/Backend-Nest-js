import { PartialType } from '@nestjs/mapped-types';

import { ProjectCreateDto } from './create.project.dto';

export class UpdateProjectDto extends PartialType(ProjectCreateDto) {}
