import { NextApiRequest, NextApiResponse } from "next";
import fetchCountry from "@/utils/fetch-country";

const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  if (!API_KEY) {
    return res.status(403).end();
  }

  const IP = req.headers["x-forwarded-for"] as string;
  const country = await fetchCountry(IP);

  return res.status(200).json({ country, IP });
}
