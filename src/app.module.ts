import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  exports: [],
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
