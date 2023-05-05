import React, { useEffect, useState } from 'react'
import axios from "axios"
import styled from "../Css/Product.modules.css"
import {AiFillDelete} from "react-icons/ai"
import {AiOutlineEdit} from "react-icons/ai"
import { Link } from 'react-router-dom'

function Products({setpage,setedit}) {
   const [value,setvalue] = useState([])
   const [change,setchange] = useState(false)
  useEffect(()=>{
    axios.get("https://reqres.in/api/users")
    .then((res)=>{
     setvalue(res.data.data)
    })    
  },[change])
  
  const handleedit = (id)=>{
    
    
  }
  const handledelete = (id)=>{
    setchange(!change)
     console.log(value)
  }

  return (
    <div className='gridmainsection'>
      {value.map((el)=>(
        <div className='gridcard'>
            <img src={el.avatar} alt="" />
            <p>{el.name}</p>
            <div className="button">
               <button id='deletebutton' onClick={()=>handledelete(el.id)}><AiFillDelete/></button>
              <Link to={`/admin/${el.id}`}><button id='editbutton'><AiOutlineEdit/></button></Link>
            </div> 
        </div>
       ))}
    </div>
  )
}

export default Products