import { NextApiRequest, NextApiResponse } from "next";

const hello = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}

export default hello;