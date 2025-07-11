import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { NextResponse } from "next/server";



export async function GET(req, { params }) {
    const collageCollection = await dbConnect(collectionNameObj.collageCollection)
    const result = await collageCollection.find({}).toArray()
    console.log(result);
    return NextResponse.json(result)

}