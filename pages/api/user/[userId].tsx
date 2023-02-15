// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Users } from "@/api-data/users";
type Data = {};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @ts-ignore
  const userId = parseInt(req.query.userId);

  res.status(200).json(Users[userId - 1]);
}
