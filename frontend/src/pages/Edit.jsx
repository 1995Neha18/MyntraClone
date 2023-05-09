import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
const initial = {
   title : "",
   size : "",
   strike_price:"",
   brand : "",
   discount_price : "",
   category : "",
   images : "",
   rating : "",
   userID:""
 }

function Edit() {
  const [data,setdata] = useState(initial)
  const [titled ,settitle] = useState("")
  const navigate = useNavigate()
  const {id} = useParams()
  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU1MDQ1NThjZGYwYWMzOTZmYTRhMDciLCJpYXQiOjE2ODMzODIyMTZ9.4EVYyMZ6R3_M99Te9FWmdeAMbtszSm7AtgnZbRLEjLI"
   useEffect(()=>{
      fetch(`https://urban-backend.onrender.com/products/search/${id}`,{
         method : "GET",
         headers : {
           "Content-type" : "application/json",
           "Authorization" : `Bearer ${localStorage.getItem("token")}`
         }
       }).then((res)=>{
         return res.json()
       }).then((res)=>{
         console.log(res)
         settitle(res)
       }).catch((err)=>{
         console.log(err)
       })
   },[])
 
  const handleChange = (e)=>{
      const {name,value} = e.target
        
         setdata({...titled,[name]:value})
      
      
  }
  
 
  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch(`https://urban-backend.onrender.com/products/${id}`,{
      method : "PATCH",
      headers : {
         "Content-type" : "application/json",
         "Authorization" : `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(data)
      }).then((res)=>{
         return res.json()
      }).then((res)=>{
         console.log(res)
         navigate("/admin")
      }).catch((err)=>{
         console.log(err)
      })
      
    
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
            <input type="text" placeholder='Product Name' name="title" onChange={handleChange} value={title}    />
            <label>Price : </label>
            <input type="text" placeholder='Price ₹' onChange={handleChange} name="strike_price" value={strike_price} />
            <label>Size : </label>
            <input type="text"  placeholder='Size' onChange={handleChange} name="size"  value={size}/>
            <label>Image : </label>
            <input type="text" placeholder='Image URL' onChange={handleChange} name="images"  value={images} />
            <label>Rating : </label>
            <input type="text" placeholder='Rating' onChange={handleChange} name="rating" value={rating} />
            <label>Category : </label>
            <select name="category" id="" onChange={handleChange} value={category} >
               <option value="">Select Category</option>
               <option value="Tshirt">Tshirt</option>
               <option value="Jacket">Jacket</option>
            </select>
            <label>Brand : </label>
            <select name="brand" id="" onChange={handleChange} value={brand} >
               <option value="">Select Brand</option>
               <option value="ZARA">ZARA</option>
               <option value="Calvin Klein">Calvin Klein</option>
            </select>
            <input  className='submitbutton' type="submit" />
         </form>
      </div>
      <div className="displayproduct">
          {<>
          <img src={data.images || images[0]} alt="image url not working" />
          <div className='ProductDetail'>
          <h6> <b>Title:</b> {data.title || title} </h6>
          <h6> <b>Price:</b> {data.strike_price || strike_price}</h6>
          <h6> <b>Cat :</b> {data.category || category}</h6>
          {/* <h6> <b>Discount:</b> {discount_price} </h6> */}
          <h6> <b>Size :</b> {data.size || size}</h6>
          <h6> <b>Brand :</b> {data.brand || brand}</h6>
          <h6> <b>Rating :</b> {data.rating || rating}</h6>
          </div>  
          </>}
      </div>  
    </div>    
  </div>
  )
}

export default Edit