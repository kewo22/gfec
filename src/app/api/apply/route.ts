import { MongoClient } from "mongodb";

export async function GET(request: Request) {
  return Response.json({ message: `Success`, data: "ww" });
}

export async function POST(request: Request) {
  const data = await request.json();
  const uri = process.env.MONGO_URL || "";
  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("applyFormData");
    const insertOneRes = await collection.insertOne(data);

    if (insertOneRes.insertedId) {
      return Response.json({ message: `Success`, data: insertOneRes });
    } else {
      throw Error("Insert failed");
    }
  } catch (error) {
    return Response.json({ message: `Failed`, data: null, error }, { status: 500 });
  }
}
