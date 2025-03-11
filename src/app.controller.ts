import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-token')
  public async getToken(
    @Payload() data: { user: string }
  ): Promise<string | null> {
    return this.appService.getToken(data);
  }
}
