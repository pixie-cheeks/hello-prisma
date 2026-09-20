import { prisma } from './lib/prisma.ts';

async function main() {
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

  const getAuthor = await prisma.user.findUnique({
    where: { id: 20 },
    include: { posts: true },
  });

  console.log(getAuthor?.id, userAndPosts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
