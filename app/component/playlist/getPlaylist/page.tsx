import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
type FProops = {
    data: never[];
    handleDelete: (id: number) => Promise<void>;
}
const GetDataPlaylist = ({ data, handleDelete }: FProops) => {
    return (
        <>
            <TableContainer mt={'100px'}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Deskripsi</Th>
                            <Th >Comment</Th>
                            <Th >Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            Array.isArray(data) && data.map((data: any) => (
                                <Tr key={data.id}>
                                    <Td>{data.title}</Td>
                                    <Td>{data.deskripsi}</Td>
                                    <Td>{data.uri}</Td>
                                    <Td display={"flex"} justifyContent={"start"} gap={2}>
                                        <Button onClick={() => handleDelete(data.id)} >
                                            Delete
                                        </Button>
                                        <Button >
                                            <Link href={`/playlist/${data.id}`}>Edit</Link>
                                        </Button>
                                    </Td>
                                </Tr>
                            ))
                        }


                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default GetDataPlaylist
