
const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

const { MongoClient, ServerApiVersion, Collection } = require('mongodb');
const uri = "mongodb+srv://database_user:IbEGNgdJhCkabAvy@myfirstcluster.te6nta2.mongodb.net/?appName=MyFirstCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const collection = client.db("test").collection("devices");
    const result = await collection.insertOne({ greeting: "Hello mongo", createdAt: new Date() });

    console.log("Ping OK - conectado ao MongoDB Atlas");
  } catch (err) {
    console.error("Erro detalhado:", err);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
