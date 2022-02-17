import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

const limitsRouter = async (req: NextApiRequest, res: NextApiResponse) => {
  const { companyId } = req.query;

  switch (req.method) {
    case "POST": {
      const { company, limitSmallRoom, limitMedRoom, limitBigRoom, coreTime } =
        req.body;

      const isValid =
        company &&
        limitSmallRoom >= 0 &&
        limitMedRoom >= 0 &&
        limitBigRoom >= 0 &&
        coreTime >= 0 &&
        companyId === company;

      isValid
        ? prisma.roomsLimits
            .upsert({
              where: {
                company,
              },
              update: {
                limitSmallRoom,
                limitMedRoom,
                limitBigRoom,
                coreTime,
              },
              create: {
                company,
                limitSmallRoom,
                limitMedRoom,
                limitBigRoom,
                coreTime,
              },
            })
            .catch((err) => {
              console.log(err);
            })
        : console.log("not valid format");
    }
    case "GET": {
      if (companyId) {
        const response = await prisma.roomsLimits.findMany({
          where: {
            company: companyId.toString(),
          },
        });
        return res.status(200).json(response);
      }
    }
    default: {
      return res.status(405).end();
    }
  }
};

export default limitsRouter;
