import clientPromise from "@/app/libs/MongoConnect";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const uri =
      "mongodb+srv://kewo22:pYa4sy0FylRbOB6r@gfec.lwodaum.mongodb.net/gfec?retryWrites=true&w=majority";
    const client = await new MongoClient(uri.trim()).connect();
    // const client = await clientPromise;
    const db = await client.db("gfec");
    const collection = db.collection("getInTouch");

    return res.status(200).json({ data: collection, message: "Success - 1" });
  } catch (error) {
    return res.status(500).json({ data: "catch err", message: "Success - 2" });
  } finally {
    return res.status(500).json({ data: "finally err", message: "Success - 3" });
  }
}
