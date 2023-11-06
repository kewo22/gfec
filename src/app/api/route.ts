import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import Mail from "nodemailer/lib/mailer";

type ApiResponse<T> = {
  data?: T;
  message: string;
  error?: any;
};

export async function GET(request: Request) {
  console.log("APIII");

  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": "",
  //     },
  //   });
  //   const data = await res.json();

  const data = 1;

  return Response.json({ data });
}

export async function POST(request: Request) {
  const data = await request.json();

  const uri = process.env.MONGO_URL || "";
  console.log("🚀 ~ file: route.ts:31 ~ POST ~ uri:", uri);

  return Response.json({ data });
}
