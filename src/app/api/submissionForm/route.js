import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { NextResponse } from "next/server";


export async function POST(req, { params }) {
    const body = await req.json()
    const submissionCollection = await dbConnect(collectionNameObj.submissionCollection)
    const result = await submissionCollection.insertOne(body)
    console.log('submission', result);
    return NextResponse.json(result)
}