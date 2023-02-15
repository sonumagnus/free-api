import type { NextApiRequest, NextApiResponse } from "next";
import { Posts } from "@/api-data/posts";
type Data = {
  id: number;
  title: string;
  author: string;
  category: string;
  body: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @ts-ignore
  const postId = parseInt(req.query.postId);

  res.status(200).json(Posts[postId - 1]);
}
