// Next.js API route support: https://nextjs

import axios from "axios";
import { USER_AGENT_DESKTOP } from "../../../src/constants";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        const { data } = await axios.get(req.body.url, {
          headers: {
            "User-Agent": USER_AGENT_DESKTOP,
          },
        });
        return res.status(200).json(data);
      case "GET":
        return res.status(200).end();
      default:
        return res.status(405).end(); // Method Not Implemented
    }
  } catch {
    res.status(500).send({ message: "Something Went Wrong" });
  }
}
