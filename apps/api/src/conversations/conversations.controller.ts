import { Controller, Get } from '@nestjs/common';
import { ConversationsService } from './conversations.service';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly service: ConversationsService) {}
  @Get() list() { return this.service.list(); }
}
