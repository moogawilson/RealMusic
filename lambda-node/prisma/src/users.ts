import prisma from "./prismaClient";

export const findUserDB = async (email: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const createUserDB = async (email: string, name: string) => {
  try {
    const result = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    return result;
  } catch (err) {
    console.error(err);
  }
};
