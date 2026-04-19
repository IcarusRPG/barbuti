import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BrandingService {
  constructor(private readonly prisma: PrismaService) {}
  get() { return this.prisma.brandSetting.findFirst(); }
}
