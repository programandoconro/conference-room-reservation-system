import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";

const limitsRouter = async (req: NextApiRequest, res: NextApiResponse) => {
  const room = req.body.room;
  const week = req.body.week;

  switch (req.method) {
    case "POST": {
      room &&
        week &&
        prisma.roomsLimits
          .upsert({
            where: {
              room,
            },
            update: {
              week,
            },
            create: {
              room,
              week,
            },
          })
          .catch((err) => {
            console.log(err);
          });
    }
    case "GET": {
      const response = await prisma.roomsLimits.findMany();
      return res.status(200).json({ data: [response] });
    }
    default: {
      return res.status(405).end();
    }
  }
};

export default limitsRouter;
