import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    const id = await params.id
    console.log('all comment id', id);
    const commentCollection = await dbConnect(collectionNameObj.commentCollection)
    const query = { postId: id }
    const result = await commentCollection.find(query).toArray()
    console.log('all comment', result);
    return NextResponse.json(result)

}