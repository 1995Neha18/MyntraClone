import React, { useState } from 'react'
import {
   Table,
   Thead,
   Tbody,
   Tfoot,
   Tr,
   Th,
   Td,
   TableCaption,
   TableContainer,
 } from '@chakra-ui/react'
const initial = {
   username : "",
   email : "",
   password : "",
   age : "",
   city : ""
}

function User() {

   const [data,setdata] = useState(initial)
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU1MDQ1NThjZGYwYWMzOTZmYTRhMDciLCJpYXQiOjE2ODMzODIyMTZ9.4EVYyMZ6R3_M99Te9FWmdeAMbtszSm7AtgnZbRLEjLI"


   const handleSubmit = (e) =>{
      e.preventDefault()
      fetch(`https://urban-backend.onrender.com/users/register`,{
         method : "POST",
         headers : {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
         },
         body : JSON.stringify(data)
      }).then((res)=>{
         return res.json()
      }).then((res)=>{
         
         if(res.msg == "Email already exists"){
            alert("User is Already exist")
         }else{
            alert("USer is Added")
         }
         setdata(initial)
      }).catch((err)=>{
         console.log(err)
      })
   }

   const handleChange = (e)=>{
      const {name,value}=e.target
      setdata({...data,[name] : value})
   }
   const {username,email,password,age,city}=data
  return (
   <div>
      <h1 >Add users</h1>
    <div className="form">
      
    <form action="" onSubmit={handleSubmit}>
       <label>Name : </label>
       <input type="text" placeholder='User Name' onChange={handleChange} name="username" value={username} />
       <label>Email : </label>
       <input type="text" placeholder='Email ID' onChange={handleChange} name='email'value={email}  />
       <label>Password : </label>
        <input type="text" placeholder='Password' onChange={handleChange} name='password' value={password} />
        <label>City : </label>
        <input type="text"  placeholder='City' onChange={handleChange} name='city' value={city}  />
        <label>Age : </label>
        <input type="text" placeholder='Age' onChange={handleChange} name='age' value={age}  />
        <input className='submitbutton' type="submit" />
    </form>
    </div> 
    </div>    
  )
}

export default User