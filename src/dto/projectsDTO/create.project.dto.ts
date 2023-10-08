import { IsString, MaxLength, IsEmpty } from 'class-validator';

export class ProjectCreateDto {
  @IsString()
  @MaxLength(100)
  @IsEmpty()
  readonly title: string;

  @IsString()
  @MaxLength(300)
  @IsEmpty()
  readonly description: string;

  @IsString()
  @MaxLength(150)
  @IsEmpty()
  readonly liveLink: string;

  @IsString()
  @MaxLength(150)
  @IsEmpty()
  readonly githubClient: string;

  @IsString()
  @MaxLength(150)
  @IsEmpty()
  readonly githubServer: string;

  @IsString()
  @MaxLength(150)
  @IsEmpty()
  readonly image: string;
}
