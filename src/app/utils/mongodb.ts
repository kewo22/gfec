import { MongoClient, Db } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  // Check if we have a cached connection and it's still healthy
  if (cachedClient && cachedDb) {
    try {
      // Verify the connection is still alive
      await cachedClient.db().admin().ping();
      return { client: cachedClient, db: cachedDb };
    } catch (error) {
      // Connection is stale, clear cache and reconnect
      console.warn("Cached MongoDB connection is stale, reconnecting...");
      cachedClient = null;
      cachedDb = null;
    }
  }

  const uri = process.env.MONGO_URL;
  
  if (!uri) {
    throw new Error("Please define the MONGO_URL environment variable");
  }

  const dbName = process.env.MONGO_DB_NAME || "gfec";

  const client = await new MongoClient(uri.trim(), {
    maxPoolSize: 10,
    minPoolSize: 2,
  }).connect();

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
