import { prisma } from './lib/prisma.ts';

const userAndPosts = await prisma.user.create({
  data: {
    posts: {
      create: [
        { title: 'Prisma Day 2020' },
        { title: 'How to write a Prisma schema' },
      ],
    },
  },
});

const foundAuthor = await prisma.user.findUnique({
  where: { id: 20 },
  include: { posts: true },
});

console.log(foundAuthor?.id, userAndPosts);

await prisma.$disconnect();
