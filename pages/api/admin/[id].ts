import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

const loginRouter = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST": {
      const email = req.body.email;
      const password = req.body.password;
      const { id } = req.query;

      await prisma.admin.upsert({
        where: {
          email,
        },
        update: {
          password,
          company: JSON.stringify(id),
        },
        create: {
          email,
          password,
          company: JSON.stringify(id),
        },
      });

      console.log(email, password, id);

      const isAdmin = await prisma.admin.findFirst({
        where: {
          email,
          password,
          company: JSON.stringify(id),
        },
      });
      if (isAdmin) {
        res.status(200).json({
          email: isAdmin.email,
          company: isAdmin.company,
        });
      } else {
        console.log("fail");
        res.status(404).json({ data: "fail" });
      }
    }
    default: {
      res.status(405).end();
    }
  }
};
export default loginRouter;
