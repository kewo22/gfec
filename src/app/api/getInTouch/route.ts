import { connectToDatabase } from "../../utils/mongodb";

export async function GET(request: Request) {
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection("getInTouch");
        const getData = await collection.find({}).toArray();
        return Response.json({ message: `Success`, data: getData })
    } catch (err) {
        return Response.json({ message: `Failed`, data: null })
    }
}