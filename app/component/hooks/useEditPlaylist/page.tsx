/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useParams } from 'next/navigation'
// import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type TEditProops={
    onSubmit: (data: Record<string, string | number>) => Promise<void>;
}
const useEditPlaylist = ({onSubmit}: TEditProops) => {
    const [detailId, setDetailId] = useState( {
        id: 0,
        title: "",
        deskripsi: "",
        uri: "",
    },)
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        const getDataId = async () => {
            const res = await axios.get(`/api/playlist/${id}`)
            setDetailId(res.data.data)
        }
        getDataId()
    },[])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetailId({ ...detailId, [name]: value })
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        await onSubmit(detailId)
    }

  return {
    detailId,
    handleChange,
    handleSubmit
  }
}

export default useEditPlaylist
