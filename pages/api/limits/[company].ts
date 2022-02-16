import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

const limitsRouter = async (req: NextApiRequest, res: NextApiResponse) => {
  const { company } = req.query;

  switch (req.method) {
    case "POST": {
      const companyPost = req.body.company;
      const limitSmall = req.body.limitSmall;
      const limitMed = req.body.limitMed;
      const limitBig = req.body.limitBig;
      companyPost &&
        limitSmall &&
        limitMed &&
        limitBig &&
        company === companyPost &&
        prisma.roomsLimits
          .upsert({
            where: {
              company: companyPost,
            },
            update: {
              limitSmall,
              limitMed,
              limitBig,
            },
            create: {
              company: companyPost,
              limitSmall,
              limitMed,
              limitBig,
            },
          })
          .catch((err) => {
            console.log(err);
          });
    }
    case "GET": {
      const response = await prisma.roomsLimits.findMany({
        where: {
          company: company.toString(),
        },
      });
      return res.status(200).json({ data: [response] });
    }
    default: {
      return res.status(405).end();
    }
  }
};

export default limitsRouter;
