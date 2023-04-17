import type { NextApiRequest, NextApiResponse } from "next";

const get = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    return res.status(200).json({ data: "data", message: "Success" });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Server error!" });
    // return NextApiResponse.json({ isConnected: "f" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    switch (req.method) {
      case "GET":
        get(req, res);
        break;

      case "POST":
        // post(req, res);
        res.status(201).json({ message: "POST" });
        break;

      case "PATCH":
        //some code...
        res.status(200).json({ message: "PATCH" });
        break;

      default:
        res.status(405).end(`${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
}
