

import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionNameObj = {
    "collageCollection": "collages",
    "submissionCollection": "submissions",
    "commentCollection": "comments",
    "usersCollection": "users"
}

export function dbConnect(collection) {
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collection)

}