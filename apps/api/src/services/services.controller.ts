import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly service: ServicesService) {}
  @Get() list() { return this.service.list(); }
}
