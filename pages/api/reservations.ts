import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";
import { ReservationType } from "utils/types";
import { allStrings } from "@comp/utils/checkers";

type Data = {
  data: ReservationType[] | "success";
};

const reservationsRoute = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  switch (req.method) {
    case "GET": {
      const reservations = await prisma.reservation.findMany();
      res.status(200).json({ data: reservations });
    }
    case "POST": {
      const name = req.body.name;
      const email = req.body.email;
      const company = req.body.company;
      const room = req.body.room;
      const date = req.body.date;
      const timestamp = req.body.timestamp;
      const start = req.body.start;
      const end = req.body.end;

      const data = { name, email, company, room, date, timestamp, start, end };
      if (allStrings(data)) {
        await prisma.reservation.create({
          data: {
            name,
            email,
            company,
            room,
            date,
            timestamp,
            start,
            end,
          },
        });
        res.status(200).json({ data: "success" });
      }
    }
    default: {
      res.status(405).end();
    }
  }
};
export default reservationsRoute;
