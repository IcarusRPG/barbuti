import { Controller, Get } from '@nestjs/common';
import { BarbersService } from './barbers.service';

@Controller('barbers')
export class BarbersController {
  constructor(private readonly service: BarbersService) {}
  @Get() list() { return this.service.list(); }
}
