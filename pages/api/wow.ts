// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/app/libs/MongoConnect";
import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";
// import initMiddleware from "../../lib/init-middleware";

type ApiResponse<T> = {
  data?: T;
  message: string;
};

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: "John Doe" });
// }

const get = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  try {
    return res
      .status(200)
      .json({ data: "ddddddddddddddddddddd", message: "Success" });
    // return data;
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Server error!" });
  }
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

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["POST", "OPTIONS"],
    allowedHeaders: [
      "X-CSRF-Token",
      "X-Requested-With",
      "Accept",
      "Accept-Version",
      "Content-Length",
      "Content-MD5",
      "Content-Type",
      "Date",
      "X-Api-Version",
    ],
    origin: "http://localhost:3000/",
    credentials: false,
  })
);

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
        await cors(req, res);
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
