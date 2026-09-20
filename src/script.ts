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
const allPosts = await prisma.post.findMany();
console.log(allPosts);

await prisma.$disconnect();
