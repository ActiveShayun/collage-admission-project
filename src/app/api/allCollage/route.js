import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { NextResponse } from "next/server";



export async function GET(req, { params }) {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')
    let query = {}
    if (search.trim()) {
        query = {
            collage_Name: { $regex: search, $options: 'i' }
        }
    }
    const collageCollection = await dbConnect(collectionNameObj.collageCollection)
    const result = await collageCollection.find(query).toArray()
    console.log(result);
    return NextResponse.json(result)

}