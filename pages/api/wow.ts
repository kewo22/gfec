import clientPromise from "@/app/libs/MongoConnect";
import type { NextApiRequest, NextApiResponse } from "next";

type ApiResponse<T> = {
  data?: T;
  message: string;
};

const get = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  return res
    .status(200)
    .json({ data: "ddddddddddddddddddddd", message: "Success" });
};

const post = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  const client = await clientPromise;
  const db = await client.db("gfec");
  const collection = db.collection("getInTouch");
  await collection.insertOne(req.body);
  return res.status(200).json({ message: "Success" });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) {
  try {
    switch (req.method) {
      case "GET":
        //some code...
        get(req, res);
        break;

      case "POST":
        //some code...
        post(req, res);
        // res.status(201).json({ message: "POST" });
        break;

      case "PATCH":
        //some code...
        res.status(200).json({ message: "PATCH" });
        break;

      default:
        res.status(405).end(`${req.method} Not Allowed`);
        break;
    }

    // if (!allowedMethods.includes(req.method!) || req.method == 'OPTIONS') {
    //   return res.status(405).send({ message: 'Method not allowed.' });
    // }
  } catch (error) {
    // Catch and log errors - return a 500 with a message
    console.error(error);
    // Sentry.captureException(error);
    res.status(500).send({ message: "Server Error" });
  }
}
