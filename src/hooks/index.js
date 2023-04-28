import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
export const useResource = (url) => 
{
    const [state,handleState] = useState([])

    useEffect( ()=>{
       axios.get(url)
       .then(response=>handleState(response.data))
    },[])

    const create= async object => 
    {
        const response = await axios.post(url,object)
        handleState(state.concat(response.data))
        return response.data
    }
    const service = {
        create
    }
   
    return [state,service]
 }
