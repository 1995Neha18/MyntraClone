import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Delete() {
    const navigation = useNavigate()
    useEffect(()=>{
        setTimeout(() => {
            navigation("/admin")
        }, 5000);
    },[])
  return (
    <h1> Item is Deleted </h1>
  )
}

export default Delete