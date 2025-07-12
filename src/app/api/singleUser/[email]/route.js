import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    console.log('user email', params);
    const email = params.email
    const query = { email }
    const usersCollection = await dbConnect(collectionNameObj.usersCollection)
    const result = await usersCollection.findOne(query)
    console.log('user profile', result);
    return NextResponse.json(result)
}