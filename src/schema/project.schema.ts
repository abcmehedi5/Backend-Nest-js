import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Project {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  liveLink: string;

  @Prop()
  githubClient: string;

  @Prop()
  githubServer: string;

  @Prop()
  image: string;
}

export const projectSchema = SchemaFactory.createForClass(Project);
