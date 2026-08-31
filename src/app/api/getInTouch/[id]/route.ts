import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const uri = process.env.MONGO_URL || "";
  const client = await new MongoClient(uri.trim()).connect();
  try {
    // Await params in Next.js 15+
    const { id } = await context.params;

    await client.connect();
    const database = client.db("gfec");
    const collection = database.collection("getInTouch");

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    // Delete the document by ID
    // const result = await collection.deleteOne({
    //   _id: new ObjectId(id),
    // });

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { isDeleted: true } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Item deleted successfully",
        id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
