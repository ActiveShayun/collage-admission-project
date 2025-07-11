import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    const id = await params
    const collageCollection = await dbConnect(collectionNameObj.collageCollection)
    const query = { _id: new ObjectId(id) }
    const result = await collageCollection.findOne(query)
    console.log('collage details', result);
    return NextResponse.json(result)

}