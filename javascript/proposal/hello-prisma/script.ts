import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const user1 = await prisma.user.create({
    data: {
      name: "JaneDoe",
      email: "janedoe@gmail.com",
      posts: {
        create: {
          title: "hello world",
        },
      },
    },
  });

  console.log("user 1: ", user1);

  const user2 = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@gmail.com",
    },
  });

  console.log("user 1: ", user2);

  const users = await prisma.user.findMany();
  console.log("users", users);

  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(usersWithPosts, { depth: null });
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
