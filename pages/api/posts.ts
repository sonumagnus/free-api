// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Posts } from '@/api-data/posts'

type Posts= {
    id: number;
    title: string;
    author: string;
    category: string;
    body: string;
}[]
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Posts>
) {
    const page = req.query.page;
  if (page === undefined) {
    res.status(200).json(Posts);
  } else {
    // @ts-ignore
    const pageInt = parseInt(page);
    const slicedData = Posts.slice(
      (pageInt - 1) * 10,
      (pageInt - 1) * 10 + 10
    );
    res.status(200).json(slicedData);
  }
}
