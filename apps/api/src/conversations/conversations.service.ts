import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConversationsService {
  constructor(private readonly prisma: PrismaService) {}
  list() { return this.prisma.conversation.findMany({ include: { client: true, messages: true } }); }
}
