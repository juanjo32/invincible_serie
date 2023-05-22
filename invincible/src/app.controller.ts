import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('pubs')
  getPubs() {
    return this.appService.getPubs();
  }
  constructor(private readonly appService: AppService) {}
}
