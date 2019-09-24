import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactsController } from './facts/facts.controller';

@Module({
  imports: [],
  controllers: [AppController, FactsController],
  providers: [AppService],
})
export class AppModule {}
