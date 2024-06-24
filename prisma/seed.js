// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

async function main() {
  await db.role.createMany({
    data: [
        {
            name: 'seller',
        },
        {
            name: 'buyer',
        },
    ],
    skipDuplicates: true,
  });

  console.log('SEEDING ROLE USER SUCCESS!');

  await db.itemCategory.createMany({
    data: [
        {
            name: 'Aksesoris',
        },
        {
            name: 'Elektronik',
        },
        {
            name: 'Alat Dapur',
        },
    ],
    skipDuplicates: true,
  });

  console.log('SEEDING ITEM CATEGORY SUCCESS!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
