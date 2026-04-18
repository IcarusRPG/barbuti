import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FinanceService {
  constructor(private readonly prisma: PrismaService) {}
  payments() { return this.prisma.payment.findMany({ include: { commission: true, appointment: true } }); }
}
