import clientPromise from "@/app/libs/MongoConnect";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = await clientPromise;
    // const db = await client.db("gfec");
    // const collection = db.collection("getInTouch");

    return res.status(200).json({ data: client, message: "Success" });
  } catch (error) {
    return res.status(500).json({ data: "catch err", message: "Success" });
  } finally {
    return res.status(500).json({ data: "finally err", message: "Success" });
  }
}
