import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

const limitsRouter = async (req: NextApiRequest, res: NextApiResponse) => {
  const companyPost = req.body.company;
  const { company } = req.query;
  const room = req.body.room;
  const week = req.body.week;

  switch (req.method) {
    case "POST": {
      companyPost &&
        room &&
        company === companyPost &&
        prisma.roomsLimits
          .upsert({
            where: {
              company: companyPost,
            },
            update: {
              room,
              week,
            },
            create: {
              company: companyPost,
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
