import { MongoClient, Db } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = process.env.MONGO_URL || "";
  
  if (!uri) {
    throw new Error("Please define the MONGO_URL environment variable");
  }

  const client = await new MongoClient(uri.trim(), {
    maxPoolSize: 10,
    minPoolSize: 2,
  }).connect();

  const db = client.db("gfec");

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
