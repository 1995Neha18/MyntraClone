import React, { useEffect, useState } from 'react'

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
   
   useEffect(()=>{
      fetch(`https://urban-backend.onrender.com/users`,{
         method : "GET",
         headers : {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
         }
      }).then((res)=>{
         return res.json()
      }).then((res)=>{
         console.log(res)
      }).catch((err)=>{
         console.log(err)
      })
   },[])

   const handleSubmit = (e) =>{
      e.preventDefault()
      fetch(`https://urban-backend.onrender.com/users/register`,{
         method : "POST",
         headers : {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
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
      <h1 className='heading' >Add users</h1>
    <div className="form userform">
      
    <form  action="" onSubmit={handleSubmit}>
       <label>Name : </label>
       <input className='addproductinput' type="text" placeholder='User Name' onChange={handleChange} name="username" value={username} />
       <label>Email : </label>
       <input className='addproductinput' type="text" placeholder='Email ID' onChange={handleChange} name='email'value={email}  />
       <label>Password : </label>
        <input className='addproductinput' type="text" placeholder='Password' onChange={handleChange} name='password' value={password} />
        <label>City : </label>
        <input className='addproductinput' type="text"  placeholder='City' onChange={handleChange} name='city' value={city}  />
        <label>Age : </label>
        <input className='addproductinput' type="text" placeholder='Age' onChange={handleChange} name='age' value={age}  />
        <input className='submitbutton addproductinpu' type="submit" />
    </form>
    </div>
      
    </div>    
  )
}

export default User