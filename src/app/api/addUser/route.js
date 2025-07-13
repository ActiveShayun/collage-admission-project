import { corsHeaders } from "@/app/lib/corsHeader/corsHeader";
import { collectionNameObj, dbConnect } from "@/app/lib/dbConect/dbConect";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
    const body = await req.json()
    const { email } = body
    const query = { email }
    console.log('user query', email, body);
    const usersCollection = await dbConnect(collectionNameObj.usersCollection)
    const isUser = await usersCollection.findOne(query)
    if (isUser) {
        return NextResponse.json({ message: 'User already exists', user: isUser }, { status: 200 });
    }
    const result = await usersCollection.insertOne(body)
    console.log('users', result);
    return NextResponse.json(result,{
        status:200,
        headers:corsHeaders
    })
}

export async function OPTIONS() {
    return NextResponse.json({},
        {
            status: 200,
            headers: corsHeaders
        })
}