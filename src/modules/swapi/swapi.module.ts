import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SwapiService } from './swapi.service';
import { SwapiController } from './swapi.controller';

@Module({
  imports: [HttpModule],
  providers: [SwapiService],
  controllers: [SwapiController],
})
export class SwapiModule {}
