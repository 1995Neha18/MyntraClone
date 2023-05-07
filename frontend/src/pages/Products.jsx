import React, { useEffect, useState } from 'react'
import axios from "axios"
import styled from "../Css/Product.modules.css"
import {AiFillDelete} from "react-icons/ai"
import {AiOutlineEdit} from "react-icons/ai"
import { Link, useParams } from 'react-router-dom'

function Products({setpage,setedit}) {
   const [value,setvalue] = useState([])
   const [change,setchange] = useState(false)
   const {id} = useParams()
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU1MDQ1NThjZGYwYWMzOTZmYTRhMDciLCJpYXQiOjE2ODMyOTMzMjl9.sOUFvK2toP3ZmD8tBftPhAeYkfOEZCF5Tb_MOKdqRIA"
   useEffect(()=>{
    fetch("https://urban-backend.onrender.com/products",{
         method : "GET",
         headers : {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
         }
         
      })
      .then((res)=>{
         return res.json()
      }).then((res)=>{
        console.log(res)
         setvalue(res)
         // setdata(initial)
      })
      .catch((err)=>{
         console.log(err)
      })   
  },[change])
  
  const handleedit = (id)=>{
    
    
  }
  const handledelete = ()=>{
    fetch(`https://urban-backend.onrender.com/products/${id}`,{
      method : "DELETE",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className='gridmainsection'>
      {value.map((el)=>(
        <div className='gridcard'>
            <img src={el.images[0]} alt="" />
            <h6>{el.title}</h6>
            <p>Price : {el.strike_price}</p>
            <p>Brand : {el.brand}</p>
            <div className="button">
            <Link to={`/admin/delete/${el._id}`}><button id='deletebutton' onClick={()=>handledelete(el.id)}><AiFillDelete/></button></Link>
              <Link to={`/admin/${el.id}`}><button id='editbutton'><AiOutlineEdit/></button></Link>
            </div> 
        </div>
       ))}
    </div>
  )
}

export default Products