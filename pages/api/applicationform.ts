import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { json } from "stream/consumers";

type ApiResponse<T> = {
  data?: T;
  message: string;
  error?: any;
};

const post = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  const uri = process.env.MONGO_URL || "";
  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("applicationForm");
    const toJson = JSON.parse(req.body)
    const insertOneRes = await collection.insertOne(toJson);
    return res.status(200).json({ message: `Success`, data: insertOneRes });
  } catch (error) {
    return res.status(500).json({ data: null, message: `Error`, error });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) {
  try {
    // await cors(req, res);
    switch (req.method) {
      case "GET":
      //   return get(req, res);

      case "POST":
        return post(req, res);

      case "PATCH":
        //   res.status(200).json({ message: "PATCH" });
        break;

      default:
        //   res.status(405).end(`${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.error(error);
    // Sentry.captureException(error);
    res.status(500).send({ message: "Server Error" });
  }
}
