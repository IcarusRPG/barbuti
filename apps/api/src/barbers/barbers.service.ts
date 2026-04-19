import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BarbersService {
  constructor(private readonly prisma: PrismaService) {}
  list() { return this.prisma.barber.findMany({ include: { employee: true, services: { include: { service: true } } } }); }
}
