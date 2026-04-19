import { Controller, Get } from '@nestjs/common';
import { BrandingService } from './branding.service';

@Controller('branding')
export class BrandingController {
  constructor(private readonly service: BrandingService) {}
  @Get() get() { return this.service.get(); }
}
