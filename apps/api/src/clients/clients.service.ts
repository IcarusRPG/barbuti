import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}
  list() { return this.prisma.client.findMany({ include: { appointments: true } }); }
}
