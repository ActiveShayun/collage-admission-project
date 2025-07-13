import { corsHeaders } from "@/app/lib/corsHeader/corsHeader";
import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function PATCH(req, { params }) {
    const body = await req.json()
    const id = params.id
    console.log('updated id', id);
    const usersCollection = await dbConnect(collectionNameObj.usersCollection)
    const query = { _id: new ObjectId(id) }
    const updatedDoc = {
        $set: body
    }
    const result = await usersCollection.updateOne(query, updatedDoc)
    console.log('updated', result);
    return NextResponse.json(result, {
        status: 200,
        headers: corsHeaders
    })
}

export async function OPTIONS() {
    return NextResponse.json({},
        {
            status: 200,
            headers: corsHeaders
        })
}