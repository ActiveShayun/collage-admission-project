import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { NextResponse } from "next/server";


export async function POST(req, { params }) {
    const body = await req.json()
    const collageCollection = await dbConnect(collectionNameObj.collageCollection)
    const result = await collageCollection.insertOne(body)
    console.log('add collage', result);
    return NextResponse.json(result)

}