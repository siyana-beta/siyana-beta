import { NextRequest, NextResponse } from 'next/server'
export async function GET(req:NextRequest){
  const code=req.nextUrl.searchParams.get('code')
  if(!code) return NextResponse.json({error:'No WHOOP code returned'})
  return NextResponse.json({status:'WHOOP callback received', code, next:'Token exchange will be enabled in the next build.'})
}
