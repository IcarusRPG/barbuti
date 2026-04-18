import { BadRequestException, Injectable } from '@nestjs/common';
import { AppointmentStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.appointment.findMany({ include: { client: true, barber: { include: { employee: true } }, service: true } });
  }

  async changeStatus(appointmentId: string, status: AppointmentStatus) {
    const appointment = await this.prisma.appointment.findUnique({ where: { id: appointmentId } });
    if (!appointment) throw new BadRequestException('Agendamento não encontrado');

    return this.prisma.appointment.update({
      where: { id: appointmentId },
      data: {
        status,
        statusHistory: { create: { status } }
      },
      include: { statusHistory: true }
    });
  }
}
