import { prisma } from './lib/prisma.ts';

// const users = await prisma.user.createMany({
//   data: [
//     { name: 'Bob', email: 'bob@prisma.io' },
//     { name: 'Yewande', email: 'yewande@prisma.io' },
//     {
//       email: 'elsa@prisma.io',
//       name: 'Elsa Prisma',
//     },
//   ],
//   skipDuplicates: true, // Skip records with duplicate unique fields
// });

// console.log(users);

// const updatedUser = await prisma.user.update({
//   where: { email: 'elsa@prisma.io' },
//   data: { name: 'Elsa the Frozen Lady' },
// });
// Returns: { email: 'emma@prisma.io', name: "Emma" }
// console.log(updatedUser);
const upsertedUser = await prisma.user.upsert({
  where: { email: 'viola@prisma.io' },
  update: { name: 'Viola the Magnificent' },
  create: { email: 'viola@prisma.io', name: 'Viola the Magnificent' },
});
console.log(upsertedUser);

await prisma.$disconnect();
