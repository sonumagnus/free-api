// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    posts: "http://localhost:3000/api/posts",
    comments: "http://localhost:3000/api/comments",
    users: "http://localhost:3000/api/users",
  });
}
