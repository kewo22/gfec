// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/app/libs/MongoConnect";
import type { NextApiRequest, NextApiResponse } from "next";

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
    const client = await clientPromise;
    const db = await client.db("gfec");
    const collection = db.collection("getInTouch");

    // const collections = GetInTouch.find().exec();
    // await collection.insertOne({ firstName: "Kewin" });
    // const data = await GetInTouch.find<GetInTouchType>({});

    const data = await collection.findOne();

    // const data2 = await collection.find<GetInTouchDocument>({});
    //   .map((obj) => obj.toObject());

    // return NextApiResponse.json({ isConnected: "true", data });
    return res.status(200).json({ data, message: "Success" });
    // return data;
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Server error!" });
    // return NextApiResponse.json({ isConnected: "f" });
  }
};

export default function handler(
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
