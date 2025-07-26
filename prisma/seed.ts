import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env');
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      uniqueId: nanoid(),
      name: 'Super Admin',
      email: adminEmail,
      password: hashedPassword,
      role: 'ADMIN', 
    },
  });

  console.log(`✅ Admin seeded with email: ${adminEmail}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding admin:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
