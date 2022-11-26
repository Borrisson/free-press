import PayWallClient from "../../../src/backend/axios";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        const { data } = await PayWallClient.get(req.body.url);
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
