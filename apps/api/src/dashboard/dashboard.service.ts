import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  summary() {
    return {
      todayAppointments: 12,
      occupancyRate: 84,
      noShowRate: 3,
      revenueMonth: 18950
    };
  }
}
