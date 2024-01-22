import prisma from "@/app/lib/data"
import { NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest) {
  const data = await prisma.playlist.findMany();
  return NextResponse.json({message: "success", data})
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const data = await prisma.playlist.create({
    data: {
      title: body.title,
      deskripsi: body.deskripsi,
      uri: body.uri
    }
  })
  return NextResponse.json({message: "success", data})
}

// export const PUT = async (request: NextRequest) => {
//   const body = await request.json();
//   const data = await prisma.playlist.update({
//     where: {
//       id: body.id
//     },
//     data: {
//       title: body.title,
//       deskripsi: body.deskripsi,
//       uri: body.uri
//     }
//   })
//   return NextResponse.json({message: "success", data})
// }

// export const DELETE = async (request: NextRequest) => {
//   const body = await request.json();
//   const data = await prisma.playlist.delete({
//     where: {
//       id: body.id
//     }
//   })
//   return NextResponse.json({message: "success", data})
// }