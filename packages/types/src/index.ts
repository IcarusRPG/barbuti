export type Role = 'ADMIN' | 'MANAGER' | 'BARBER' | 'RECEPTION';

export type Rgb = {
  r: number;
  g: number;
  b: number;
};

export interface BrandSettings {
  companyName: string;
  logoUrl: string;
  primaryRgb: Rgb;
  secondaryRgb: Rgb;
  accentRgb: Rgb;
}

export interface KpiSummary {
  todayAppointments: number;
  occupancyRate: number;
  noShowRate: number;
  revenueMonth: number;
}
