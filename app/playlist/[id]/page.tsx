/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import useEditPlaylist from '@/app/component/hooks/useEditPlaylist/page'
import { Box, Button, Container, FormControl, FormLabel, Grid, Input } from '@chakra-ui/react'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const EditPlylist = () => {
    const navigate = useRouter()
    const  {id}  = useParams()
 
    const { detailId, handleChange, handleSubmit} = useEditPlaylist({
            onSubmit: async (data) => {
                await axios.put(`/api/playlist/${id}`, data)
                navigate.push("/playlist")
            },

        })
    
    return (
        <>
            <Container maxW="container.lg" mt={10}>
                <Box >
                    <Box >
                        <form onSubmit={handleSubmit} method="post">
                            <FormControl>
                                <FormLabel>ID</FormLabel>
                                <Input
                                    value={id}
                                    disabled
                                    name="id"
                                    
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    name="title"
                                    onChange={handleChange}
                                    value={detailId.title}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Deskripsi</FormLabel>
                                <Input
                                    name="deskripsi"
                                    onChange={handleChange}
                                    value={detailId.deskripsi}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Comment</FormLabel>
                                <Input
                                    name="uri"
                                    onChange={handleChange}
                                    value={detailId.uri}
                                />
                            </FormControl>

                            <FormControl mt={4} >
                                <Button type="submit" >
                                    Kirim
                                </Button>
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default EditPlylist
