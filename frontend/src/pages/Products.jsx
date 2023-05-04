import React, { useEffect, useState } from 'react'
import axios from "axios"
import styled from "../Css/Product.modules.css"
import {AiFillDelete} from "react-icons/ai"
import {AiOutlineEdit} from "react-icons/ai"

function Products() {
   const [value,setvalue] = useState([])
  useEffect(()=>{
    axios.get("https://63c636e7dcdc478e15bd1636.mockapi.io/api/v1/Clothes")
    .then((res)=>{
     setvalue(res.data)
    })    
  },[])
  console.log(value)

  return (
    <div className='gridmainsection'>
      {value.map((el)=>(
        <div className='gridcard'>
            <img src={el.avatar} alt="" />
            <p>{el.name}</p>
            <div className="button">
               <button id='deletebutton'><AiFillDelete/></button>
               <button id='editbutton'><AiOutlineEdit/></button>
            </div> 
        </div>
       ))}
    </div>
  )
}

export default Products