import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";
import { encryptPassword } from "@components/utils/encryption";

const loginRouter = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST": {
      const token = req.body.token;

      if (token) {
        const isUser = await prisma.user.findFirst({
          where: {
            token,
          },
        });
        if (isUser) {
          res.status(200).json({
            token: isUser.token,
            name: isUser.name,
            email: isUser.email,
            company: isUser.company,
          });
        } else {
          res.status(404).json({ data: "fail" });
        }
      } else {
        const email = req.body.email;
        const password = req.body.password;

        const isUser = await prisma.user.findFirst({
          where: {
            email,
            password,
          },
        });
        if (isUser) {
          res.status(200).json({
            name: isUser.name,
            email: isUser.email,
            company: isUser.company,
            token: isUser.token,
          });
        } else {
          console.log("fail");
          res.status(404).json({ data: "fail" });
        }
      }
    }
    default: {
      res.status(405).end();
    }
  }
};

export default loginRouter;
