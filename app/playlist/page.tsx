/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Input,
    Container,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import GetDataPlaylist from '../component/playlist/getPlaylist/page';
import UseGetPlaylist from '../component/hooks/useGetPlayliast/page';
import useForm from '../component/hooks/useAddPlaylist/page';
const Playlist = () => {

    const { data, handleDelete, getData } = UseGetPlaylist()
    const { formData,setFormData, handleChange, handleSubmit } = useForm({
        initialValues: {
          title: '',
          deskripsi: '',
          uri: '',
        },
        onSubmit: async (data) => {
          await axios.post('api/playlist', data);
          await getData();
        },
          
      });

    

    return (
        <>

            <Container maxW={"container.2lg"}>
                <Box  >
                    <Box width={'500px'}>
                        <form onSubmit={handleSubmit} >
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    required
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Deskripsi</FormLabel>
                                <Input
                                    required
                                    name="deskripsi"
                                    onChange={handleChange}
                                    value={formData.deskripsi}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Comment</FormLabel>
                                <Input
                                    name="uri"
                                    value={formData.uri}
                                    required
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl mt={2}>
                                <Button type="submit" disabled={!formData.title || !formData.deskripsi || !formData.uri}>
                                    Kirim
                                </Button>

                            </FormControl>
                        </form>
                    </Box>
                    <GetDataPlaylist handleDelete={handleDelete} data={data} />
                </Box>
            </Container >
        </>
    )
}

export default Playlist
