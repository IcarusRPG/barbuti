import { PrismaClient, UserRole } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await argon2.hash('Icarus#Goias!123');

  await prisma.user.upsert({
    where: { username: 'adminicarus' },
    update: {},
    create: {
      username: 'adminicarus',
      passwordHash,
      role: UserRole.ADMIN,
      mustChangePassword: true
    }
  });

  await prisma.brandSetting.upsert({
    where: { id: 'default-brand' },
    update: {},
    create: {
      id: 'default-brand',
      companyName: 'Barbutti Barbearia',
      logoUrl:
        'https://res.cloudinary.com/dk6okgt0a/image/upload/v1776542449/WhatsApp_Image_2026-04-17_at_21.09.05_sgbuvm.jpg',
      primaryRgb: '224,215,195',
      secondaryRgb: '255,255,255',
      accentRgb: '149,117,62'
    }
  });
}

main().finally(() => prisma.$disconnect());
