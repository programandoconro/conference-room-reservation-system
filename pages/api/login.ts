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
          res.status(200).json({ token: isUser.token });
        } else {
          res.status(404).json({ data: "fail" });
        }
      } else {
        const email = req.body.email;
        const password = await encryptPassword(req.body.password);
        const isUser = await prisma.user.findFirst({
          where: {
            email,
            password,
          },
        });
        if (isUser) {
          res.status(200).json({ token: isUser.token });
        } else {
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
