import { Controller, Get, Param, Query } from '@nestjs/common';
import { SwapiService } from './swapi.service';

@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get('character/:name')
  getCharacterDetails(@Param('name') name: string) {
    return this.swapiService.getCharacterDetails(name);
  }

  @Get('data')
  fetchData(@Query('url') url: string) {
    return this.swapiService.fetchAdditionalData(url);
  }
}
