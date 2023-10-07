import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project/project.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'portfolio',
    }),
  ],
  controllers: [AppController, ProjectController],
  providers: [AppService],
})
export class AppModule {}
