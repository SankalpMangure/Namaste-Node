const { MongoClient } = require('mongodb');

async function test() {
  const uri = 'mongodb+srv://SankalpMangure:Sankalp%4010@cluster0.k2upamx.mongodb.net/local?retryWrites=true&w=majority&appName=Cluster0&tls=true&family=4';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB Atlas");
  } catch (err) {
    console.error("❌ Connection failed:", err);
  } finally {
    await client.close();
  }
}

test();
