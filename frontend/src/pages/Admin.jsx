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

function Admin() {
   const [page,setpage] = useState("")
   const handleLogout = () => {
      alert("You are Logout")
   }
   
   
  return (
    <div className='main'>
        
       <div className="sidebar">
           <img src={Photo1} alt='' className='sideHeading' />
           <div className='SidebarButton'>
             <button onClick={()=>setpage("Home")}><AiFillHome/> Home</button>
             <button onClick={()=>setpage("Products")}><MdOutlineProductionQuantityLimits/> Products</button>
             <button onClick={()=>setpage("Users")}><AiOutlineUser/> Users</button>
             <button onClick={()=>setpage("Edit")}><AiFillEdit/>  Edit</button>
             <button onClick={()=>setpage("Add")}><AiOutlineAppstoreAdd/> Add Product</button>
             <button onClick={handleLogout}><CiLogout/> Logout</button>
           </div>
           
        </div>
        <div className='mainpage'>
            {page=="Home" ? <Dashboard/>
            : page=="Users" ? <User/>
             : page=="Products" ? <Products/> 
              : page == "Edit" ? <Edit/> 
               : page == "Add" ? <AddProduct/> : <Dashboard/> }  
        </div>
    </div>
 
  )
}

export default Admin