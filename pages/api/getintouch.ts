// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";
import { MongoClient } from "mongodb";

type ApiResponse<T> = {
  data?: T;
  message: string;
  error?: any;
};

const get = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  const uri = process.env.MONGO_URL || "";
  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("getInTouch");
    const data = await collection.find({}).toArray();

    return res.status(200).json({ data: data, message: uri });
  } catch (error) {
    return res
      .status(500)
      .json({ data: "catch err", message: `Success - 1 ${uri}`, error });
  }
};

const post = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  const uri = process.env.MONGO_URL || "";
  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("getInTouch");
    const x = {
      firstName: JSON.parse(req.body).firstName,
      lastName: JSON.parse(req.body).lastName,
      email: JSON.parse(req.body).email,
      phone: JSON.parse(req.body).phone,
      address: JSON.parse(req.body).address,
      preferredDate: JSON.parse(req.body).preferredDate,
      preferredTime: JSON.parse(req.body).preferredTime,
    };
    const insertOneRes = await collection.insertOne(x);
    return res
      .status(200)
      .json({ message: `Success - 2 ${uri}`, data: insertOneRes });
  } catch (error) {
    return res
      .status(500)
      .json({ data: "catch err", message: `Success - 3 ${uri}`, error });
  }
};

function initMiddleware(middleware: any) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// // Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ["POST", "OPTIONS"],
//     allowedHeaders: [
//       "X-CSRF-Token",
//       "X-Requested-With",
//       "Accept",
//       "Accept-Version",
//       "Content-Length",
//       "Content-MD5",
//       "Content-Type",
//       "Date",
//       "X-Api-Version",
//     ],
//     origin: "*",
//     credentials: false,
//   })
// );

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) {
  try {
    // await cors(req, res);
    switch (req.method) {
      case "GET":
        return get(req, res);
        break;

      case "POST":
        return post(req, res);
        break;

      case "PATCH":
        res.status(200).json({ message: "PATCH" });
        break;

      default:
        res.status(405).end(`${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.error(error);
    // Sentry.captureException(error);
    res.status(500).send({ message: "Server Error" });
  }
}
