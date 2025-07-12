import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    const commentCollection = await dbConnect(collectionNameObj.commentCollection)
    const result = await commentCollection.find({}).toArray()
    console.log('all comment', result);
    return NextResponse.json(result)
}