import axios from 'axios';
import React, { useEffect, useState } from 'react'


const UseGetPlaylist = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get("api/playlist")
        setData(res.data.data)
    }
    useEffect(() => {
        getData()
    }, [])



  const handleDelete = async (id: number) => {
    const datas = await axios.delete("api/playlist/" + id)
    console.log(datas)
    getData()
}

  return {
    data,
    getData,
    handleDelete,
  };
};


export default UseGetPlaylist
