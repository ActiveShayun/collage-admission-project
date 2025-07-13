import { corsHeaders } from "@/app/lib/corsHeader/corsHeader";
import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const email = params?.email
    console.log('my collage email', email);
    const submissionCollection = await dbConnect(collectionNameObj.submissionCollection)
    const query = { email: email }
    const result = await submissionCollection.find(query).toArray()
    console.log('my collage', result);
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
