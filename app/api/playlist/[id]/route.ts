import prisma from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const id = +params.id;
  if (!id) {
    return NextResponse.json({ message: 'Invalid request. Missing ID.' }, { status: 400 });
  }
  const data = await prisma.playlist.findUnique({
    where: {
      id: id
    }
  })
  return NextResponse.json({ message: "success", data })
}
export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const id = +params.id;
    if (!id) {
      return NextResponse.json({ message: 'Invalid request. Missing ID.' }, { status: 400 });
    }
    const body = await request.json();
    console.log("body", body);
    console.log(id)
    const data = await prisma.playlist.update({
        where: {
            id: id
        },
        data: {
            title: body.title,
            deskripsi: body.deskripsi,
            uri: body.uri
        }
    })
    return NextResponse.json({ message: "success", data })
}

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const id = +params.id;
        if (!id) {
          return NextResponse.json({ message: 'Invalid request. Missing ID.' }, { status: 400 });
        }
  
        const data = await prisma.playlist.delete({
          where: {
            id: id,
          },
        });
  
        return NextResponse.json({ message: 'success', data });
      } catch (error) {
        console.error('Error deleting playlist:', error);
        return NextResponse.json({ message: 'Error deleting playlist' }, { status: 500 });
      }
}