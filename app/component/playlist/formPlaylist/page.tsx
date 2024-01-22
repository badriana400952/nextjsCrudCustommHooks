// import React from 'react'
// import useForm from '../../hooks/useAddPlaylist/page';
// import axios from 'axios';
// import UseGetPlaylist from '../../hooks/useGetPlayliast/page';
// import {
//     Box,
//     Button,
//     Input,
//     Container,
//     FormControl,
//     FormLabel,
// } from '@chakra-ui/react';
// import { useRouter } from 'next/navigation';
// const ForomPlaylist = () => {
//     // const { getData } = UseGetPlaylist()
//     const navigate = useRouter()
//     const { formData, getData, setFormData, handleChange, handleSubmit } = useForm({
//         initialValues: {
//             title: '',
//             deskripsi: '',
//             uri: '',
//         },
//         onSubmit: async (data) => {
//             await axios.post('api/playlist', data);
//             navigate.push('/playlist')
//         },
    
//     });
//     return (
//         <>
//             <Box width={'500px'}>
//                 <form onSubmit={handleSubmit} >
//                     <FormControl>
//                         <FormLabel>Title</FormLabel>
//                         <Input
//                             required
//                             name="title"
//                             onChange={handleChange}
//                         />
//                     </FormControl>

//                     <FormControl>
//                         <FormLabel>Deskripsi</FormLabel>
//                         <Input
//                             required
//                             name="deskripsi"
//                             onChange={handleChange}
//                         />
//                     </FormControl>
//                     <FormControl>
//                         <FormLabel>Comment</FormLabel>
//                         <Input
//                             name="uri"
//                             required
//                             onChange={handleChange}
//                         />
//                     </FormControl>

//                     <FormControl mt={2}>
//                         <Button type="submit" disabled={!formData.title || !formData.deskripsi || !formData.uri}>
//                             Kirim
//                         </Button>

//                     </FormControl>
//                 </form>
//             </Box>
//         </>
//     )
// }

// export default ForomPlaylist
