import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/guards/api-key.guard';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(ApiKeyGuard)
  @Get('pubs')
  getPubs() {
    return this.appService.getPubs();
  }
  constructor(private readonly appService: AppService) {}
}
