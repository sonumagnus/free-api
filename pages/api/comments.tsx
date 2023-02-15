// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { comments } from "@/api-data/comments";

type Data = {
  id: number;
  name: string;
  username: string;
  email: string;
  body: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const page = req.query.page;
  if (page === undefined) {
    res.status(200).json(comments);
  } else {
    // @ts-ignore
    const pageInt = parseInt(page);
    const slicedData = comments.slice(
      (pageInt - 1) * 10,
      (pageInt - 1) * 10 + 10
    );
    res.status(200).json(slicedData);
  }
}
