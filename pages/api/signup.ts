import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";
import { allStrings } from "utils/checkers";
import { createToken, encryptPassword } from "@components/utils/encryption";

const singUpRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      const users = await prisma.user.findMany();
      res.status(200).json({ data: users });
    }
    case "POST": {
      const name = req.body.name;
      const email = req.body.email;
      const company = req.body.company;
      const password = await encryptPassword(req.body.password);
      const token = createToken(name);
      console.log(token);

      const user = { name, email, company, password, token };

      if (allStrings(user)) {
        await prisma.user
          .create({
            data: user,
          })
          .then(() => {
            res.status(200).json({ data: "success", token: token });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
          });
      }
    }

    default: {
      res.status(405).end();
    }
  }
};
export default singUpRoute;
