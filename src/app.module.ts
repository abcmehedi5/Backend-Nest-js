import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project/project.controller';
import { projectSchema } from './schema/project.schema';
import { ProjectService } from './project/project.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'portfolio',
    }),
    MongooseModule.forFeature([{ name: 'Project', schema: projectSchema }]),
  ],
  controllers: [AppController, ProjectController],
  providers: [AppService, ProjectService],
})
export class AppModule {}
