// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import Cors from "cors";
import Mail from "nodemailer/lib/mailer";

type ApiResponse<T> = {
  data?: T;
  message: string;
  error?: any;
};

const get = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  return res
    .status(200)
    .json({ data: "IMPLEMENT THIS LATER", message: "Success" });
  //   const uri = process.env.MONGO_URL || "";
  //   try {
  //     const client = await new MongoClient(uri.trim()).connect();
  //     const db = await client.db("gfec");
  //     const collection = db.collection("getInTouch");
  //     const data = await collection.find({}).toArray();

  //     return res.status(200).json({ data: data, message: "Success" });
  //   } catch (error) {
  //     return res.status(500).json({ data: null, message: `Error`, error });
  //   }
};
const post = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  const uri = process.env.MONGO_URL || "";
  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("apply");
    console.log(req.body)
    // const x = {
    //   firstName: JSON.parse(req.body).firstName,
    //   lastName: JSON.parse(req.body).lastName,
    //   email: JSON.parse(req.body).email,
    //   phone: JSON.parse(req.body).phone,
    //   address: JSON.parse(req.body).address,
    //   preferredDate: JSON.parse(req.body).preferredDate,
    //   preferredTime: JSON.parse(req.body).preferredTime,
    // };

    // const insertOneRes = await collection.insertOne(x);
    // if (insertOneRes.insertedId) {
    //   console.log("🚀 ~ file: apply.ts:54 ~ insertOneRes:", insertOneRes);
    // }

    return res.status(200).json({ message: `Success`, data: null });
    // return res.status(200).json({ message: `Success`, data: insertOneRes });
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
        return get(req, res);

      case "POST":
        return post(req, res);

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
