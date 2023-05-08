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
    fetch("https://urban-backend.onrender.com/admin",{
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
  
  
  const handledelete = (id)=>{
    fetch(`https://urban-backend.onrender.com/admin/${id}`,{
      method : "DELETE",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      
      setchange(!change)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      <h1 className='userheading'>All Products</h1>
    <div className='gridmainsection'>
      {value.map((el)=>(
        <div className='gridcard'>
            <img className='gridimage' src={el.images[0]} alt="" />
            <h6>{el.title}</h6>
            <p>Price : {el.strike_price}</p>
            <p>Brand : {el.brand}</p>
            <div className="button">
             <button className='bothbtn' id='deletebutton' onClick={()=>handledelete(el._id)}><AiFillDelete/></button>
              <Link to={`/admin/${el._id}`}><button className='bothbtn' id='editbutton'><AiOutlineEdit/></button></Link>
            </div> 
        </div>
       ))}
    </div>
    </div> 
  )
}

export default Products