import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { AppointmentStatus } from '@prisma/client';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly service: AppointmentsService) {}

  @Get()
  list() {
    return this.service.list();
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: AppointmentStatus) {
    return this.service.changeStatus(id, status);
  }
}
