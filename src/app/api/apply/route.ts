import { connectToDatabase } from "../../utils/mongodb";

type ApiResponse<T> = {
    data?: T;
    message: string;
    error?: any;
};

export async function GET(request: Request) {
    return Response.json({ message: `Success`, data: 'ww' })
}

export async function POST(request: Request) {
    const data = await request.json();

    try {
        const { db } = await connectToDatabase();
        const collection = db.collection("applicationForm");
        const insertOneRes = await collection.insertOne(data);

        if (insertOneRes.insertedId) {
            return Response.json({ message: `Success`, data: insertOneRes })
        } else {
            throw Error('Insert failed')
        }
    } catch (error) {
        return Response.json({ message: `Failed`, data: null, error })
    }

}
