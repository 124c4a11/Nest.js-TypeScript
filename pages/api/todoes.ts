// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { ITodo } from '../../interfaces/ITodo'
import { todoes } from './data/todoes'


type Data = ITodo[];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') res.status(200).json(todoes);
}
