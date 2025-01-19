import prisma from "./prismaClient";
export const createArtist = async (artistId: string, channelTitle: string) => {
  try {
    const result = await prisma.artist.upsert({
      where: { id: artistId },
      update: {},
      create: { id: artistId, channelTitle: channelTitle },
    });
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const checkIfArtist = async (id: string) => {
  try {
    const result = await prisma.artist.findUnique({ where: { id: id } });
    if (result === null) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};

// export const getArtist = async () => {
//   try {
//     // const prisma = new PrismaClient();
//     const result = await prisma.artist.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return result;
//   } catch (err) {
//     console.error(err);
//   }
// };
