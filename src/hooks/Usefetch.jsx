import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {fetchDataFromApi} from "../Utils/api"
const Usefetch = (url) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(null)

    useEffect(()=>{
       setLoading("Loading...")
       setData(null)
       setError(null)

       fetchDataFromApi(url)
       .then((res)=>{
        setLoading(false)
        setData(res)
       })
       .catch((err)=>{
        setLoading(false)
        setError(err)
       })
    },[url])

    return {data,loading,error};
}

export default Usefetch