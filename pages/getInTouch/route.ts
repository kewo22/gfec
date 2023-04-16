import clientPromise from "@/app/libs/MongoConnect";
import { GetInTouch } from "@/app/models/GetInTouch";
import { NextResponse } from "next/server";

export async function GET() {
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

    return NextResponse.json({ isConnected: "true", data });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ isConnected: "f" });
  }
}

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);
  const client = await clientPromise;
  const db = await client.db("gfec");
  const collection = db.collection("getInTouch");
  await collection.insertOne({ firstName: res.firstName });
  return NextResponse.json({ isConnected: "T" });
}
