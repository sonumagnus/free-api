// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { comments } from "@/api-data/comments";
type Data = {
  id: number;
  name: string;
  username: string;
  email: string;
  body: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @ts-ignore
  const commentId = parseInt(req.query.commentId);

  res.status(200).json(comments[commentId - 1]);
}
