import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

const limitsRouter = async (req: NextApiRequest, res: NextApiResponse) => {
  const { companyId } = req.query;

  switch (req.method) {
    case "POST": {
      const {
        company,
        limitSmallRoom,
        limitMedRoom,
        limitBigRoom,
        coreTimeStart,
        coreTimeEnd,
      } = req.body;

      const isValid =
        company &&
        limitSmallRoom >= 0 &&
        limitMedRoom >= 0 &&
        limitBigRoom >= 0 &&
        coreTimeStart >= 0 &&
        coreTimeEnd >= 0 &&
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
                coreTimeStart,
                coreTimeEnd,
              },
              create: {
                company,
                limitSmallRoom,
                limitMedRoom,
                limitBigRoom,
                coreTimeStart,
                coreTimeEnd,
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
