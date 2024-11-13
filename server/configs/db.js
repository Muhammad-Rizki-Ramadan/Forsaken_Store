import { MongoClient, ServerApiVersion } from "mongodb";

//const { MONGODB_URI, MONGODB_DATABASE} = process.env

const dbURI = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DATABASE;

const client = new MongoClient(dbURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // Connect the client to the server
    await client.connect();
    // send a ping to confirm a succesful connection
    await client.db(databaseName).command({ ping: 1 });
    console.log("Koneksi ke database berhasil");
} catch (error) {
    console.log("Koneksi ke database gagal", error);
}

export const db = client.db(databaseName);