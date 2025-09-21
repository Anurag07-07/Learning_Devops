import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

//How to see user data in backend
//If user is logged in 
export async function GET(){
  const session = await getServerSession(NEXT_AUTH)
  return NextResponse.json({
    session
  })
}