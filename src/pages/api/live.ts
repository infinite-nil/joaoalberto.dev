import { authorize } from "@liveblocks/node";
import { NextApiRequest, NextApiResponse } from "next";
import fetchCountry from "@/utils/fetch-country";

const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  if (!API_KEY) {
    return res.status(403).end();
  }

  const IP = req.headers["x-forwarded-for"] as string;
  const country = await fetchCountry(IP);
  const room = req.body.room;

  if (room === 'home') {
    const response = await authorize({
      room,
      secret: API_KEY,
      userInfo: {
        country,
      },
    });

    return res.status(response.status).end(response.body);
  }

  const response = await authorize({
    room,
    secret: API_KEY,
  });

  return res.status(response.status).end(response.body);
}
