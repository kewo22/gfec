import { MongoClient } from "mongodb";


export async function GET() {
    const uri = process.env.MONGO_URL || "";
    try {
        const client = await new MongoClient(uri.trim()).connect();
        const db = await client.db("gfec");
        const collection = db.collection("applicationForm");
        const getData = await collection.find({}).toArray();
        return Response.json({ message: `Success`, data: getData })
    } catch (err) {
        return Response.json({ message: `Failed`, data: null })
    }
}