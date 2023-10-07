import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project/project.controller';
import { projectSchema } from './schema/project.schema';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'portfolio',
    }),
    MongooseModule.forFeature([{ name: 'Project', schema: projectSchema }]),
    ProjectModule,
  ],
  controllers: [AppController, ProjectController],
  providers: [AppService],
})
export class AppModule {}
