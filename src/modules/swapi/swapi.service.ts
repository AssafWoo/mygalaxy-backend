import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SwapiService {
  constructor(private httpService: HttpService) {}

  private cache = new Map<string, any>();

  private async fetchFromSwapi(endpoint: string): Promise<any> {
    try {
      const response = await firstValueFrom(this.httpService.get(endpoint));
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch data from SWAPI',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  async getCharacterDetails(characterName: string): Promise<any> {
    const url = `https://swapi.dev/api/people/?search=${characterName}`;
    return this.fetchFromSwapi(url);
  }

  async fetchAdditionalData(url: string): Promise<any> {
    return this.fetchFromSwapi(url);
  }
}
