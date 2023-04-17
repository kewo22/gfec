import clientPromise from "@/app/libs/MongoConnect";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const client = await clientPromise;
  const db = await client.db("gfec");
  const collection = db.collection("getInTouch");

  return res
    .status(200)
    .json({ data: "ddddddddddddddddddddd", message: "Success" });
}
