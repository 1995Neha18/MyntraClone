import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const [data,setdata] = useState("")
  const [newdata,setnew] = useState("")
  const navigate = useNavigate()
  const {id} = useParams()
  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU1MDQ1NThjZGYwYWMzOTZmYTRhMDciLCJpYXQiOjE2ODMzODIyMTZ9.4EVYyMZ6R3_M99Te9FWmdeAMbtszSm7AtgnZbRLEjLI"

  
  useEffect(()=>{
   fetch(`https://urban-backend.onrender.com/products/${id}`,{
      headers : {
         "Authorization" : `Bearer ${token}`
      }
   })
   .then((res)=>{
      return res.json()
   }).then((res)=>{
      setdata(res)
   }).catch((err)=>{
      console.log(err)
   })
   },[])
  
 
  const handleChange = (e)=>{
     const [name,value] = e.target
     setdata((prev)=>[{...prev,[name] : value}])
  }
  
  const handleSubmit = ()=>{
   fetch(`https://urban-backend.onrender.com/products/${id}`,{
      method : "PATCH",
      headers : {
         "Content-type" : "application/json",
         "Authorization" : `Bearer ${token}`
      },
      
   })
   .then((res)=>{
      return res.json()
   })
   .then((res)=>{
      console.log(res)
      setdata(res)
   }).catch((err)=>{
      console.log(err)
   })
     navigate("/admin")
  }
  const {title,strike_price,size,images,brand,category,rating} = data
  return (
    <div>
        <div className='headingflex'>
           <h1 className='addProduct'>Edit Products ID : {id}</h1>
           {/* <h6>Deepak Pandey</h6> */}
        </div>
         
      <div className="mainaddproduct">   
        <div className="form">
         <form action="" onSubmit={handleSubmit}>
            <label>Title : </label>
            <input type="text" placeholder='Product Name' onChange={handleChange} name="title" value={title} />
            <label>Price : </label>
            <input type="text" placeholder='Price ₹' onChange={handleChange} name="strike_price" value={strike_price} />
            <label>Size : </label>
            <input type="text"  placeholder='Size' onChange={handleChange} name="size" value={size} />
            <label>Image : </label>
            <input type="text" placeholder='Image URL' onChange={handleChange} name="images" value={images[0]}  />
            <label>Rating : </label>
            <input type="text" placeholder='Description' onChange={handleChange} name="rating" value={rating}  />
            <label>Category : </label>
            <select name="Category" id="" onChange={handleChange} >
               <option value="">Select Category</option>
               <option value="Tshirt">Tshirt</option>
               <option value="Jacket">Jacket</option>
            </select>
            <label>Brand : </label>
            <select name="Brand" id="" onChange={handleChange} >
               <option value="">Select Brand</option>
               <option value="ZARA">ZARA</option>
               <option value="Calvin Klein">Calvin Klein</option>
            </select>
            <input  className='submitbutton' type="submit" />
         </form>
      </div>
      <div className="displayproduct">
          {<>
          <img src={images[0]} alt="{ImageURL}" />
          <div className='ProductDetail'>
          <h6> <b>Title:</b> {title} </h6>
          <h6> <b>Price:</b> {strike_price} </h6>
          <h6> <b>Cat :</b> {category}</h6>
          <h6> <b>Size :</b> {size} </h6>
          <h6> <b>Brand :</b> {brand} </h6>
          <h6> <b>Rating :</b> {rating} </h6>
          </div>  
          </>}
      </div>  
    </div>    
  </div>
  )
}

export default Edit