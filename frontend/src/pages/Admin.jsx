import React, { useState } from 'react'
import styled from "../Css/admin.modules.css"
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {AiOutlineUser} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import {AiOutlineAppstoreAdd} from "react-icons/ai"
import Dashboard from './Dashboard'
import User from './User'
import Products from './Products'
import Edit from './Edit'
import AddProduct from './AddProduct'
import Photo1 from "../Images/Photo1.png"
import {CiLogout} from "react-icons/ci"
import { Navigate, useNavigate } from 'react-router-dom'

function Admin() {
   const [page,setpage] = useState("")
   const [edit,setedit] = useState("")
   const navigate = useNavigate()
   const handleLogout = () => {
      
      navigate("/")
      // alert("You are Logout")
   }
   
   
  return (
    <div className='main'>
        
       <div className="sidebar">
           
             <button onClick={()=>setpage("Home")}> <span><AiFillHome/>Dashboard</span></button>
             <button onClick={()=>setpage("Products")}> <span><MdOutlineProductionQuantityLimits/>Products</span></button>
             <button onClick={()=>setpage("Users")}><span><AiOutlineUser/>Users</span></button>
             {/* <button onClick={()=>setpage("Edit")}><span><AiFillEdit/>Edit</span></button> */}
             <button onClick={()=>setpage("Add")}><span><AiOutlineAppstoreAdd/>Add Product</span></button>
             <button onClick={handleLogout}><span><CiLogout/>Logout</span></button>
           
           
        </div>
        <div className='mainpage'>
            {page=="Home" ? <Dashboard/>
            : page=="Users" ? <User/>
             : page=="Products" ? <Products /> 
            //   : page == "Edit" ? <Edit /> 
               : page == "Add" ? <AddProduct/> : <Dashboard/> }  
        </div>
    </div>
 
  )
}

export default Admin