import React, { useState } from 'react'
import styled from "../Css/AddProduct.modules.css"

const initial = {
  name : "",
  title : "",
  size : "",
  strike_price:"",
   brand : "",
  discount : "",
  category : "",
  images : "",
  userID:""
}

function AddProduct() {
  const [data,setdata] = useState(initial)
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU1MDQ1NThjZGYwYWMzOTZmYTRhMDciLCJpYXQiOjE2ODMyOTMzMjl9.sOUFvK2toP3ZmD8tBftPhAeYkfOEZCF5Tb_MOKdqRIA"
   const handleChange = (e)=>{
      const {name,value} = e.target
      setdata({
        ...data,
        [name] : value
      })
   }
   const handleSubmit  = (e)=>{
      e.preventDefault()
      fetch("https://urban-backend.onrender.com/admin/add",{
         method : "POST",
         headers : {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
         },
         body : JSON.stringify(data)
      })
      .then((res)=>{
         return res.json()
      }).then((res)=>{
         console.log(res)
         // setdata(initial)
      })
      .catch((err)=>{
         console.log(err)
      })
      
   }
   
   const {name,title,size,strike_price,brand,discount,category,images,userID} = data
  return (
     <div>
        <div className='headingflex'>
           <h1 className='addProduct'>Add Products</h1>
           {/* <h6>Deepak Pandey</h6> */}
        </div>
         
      <div className="mainaddproduct">   
        <div className="form">
         <form action="" onSubmit={handleSubmit}>
            <label>Name : </label>
            <input type="text" placeholder='Product Name' onChange={handleChange} name="name" value={name}/>
            <label>Price : </label>
            <input type="text" placeholder='Price ₹' onChange={handleChange} name="strike_price" value={strike_price}/>
            <label>Discount : </label>
            <input type="text" placeholder='Discount' onChange={handleChange} name="discount" value={discount}/>
            <label>Size : </label>
            <input type="text"  placeholder='Size' onChange={handleChange} name="size" value={size}/>
            <label>Image : </label>
            <input type="text" placeholder='Image URL' onChange={handleChange} name="images" value={images}/>
            <label>Title : </label>
            <input type="text" placeholder='Title' onChange={handleChange} name="title" value={title}/>
            <label>Category : </label>
            <select name="category" id="" onChange={handleChange} value={category}>
               <option value="">Select Category</option>
               <option value="Tshirt">Tshirt</option>
               <option value="Jacket">Jacket</option>
            </select>
            <label>Brand : </label>
            <select name="brand" id="" onChange={handleChange} value={brand}>
               <option value="">Select Brand</option>
               <option value="ZARA">ZARA</option>
               <option value="Calvin Klein">Calvin Klein</option>
            </select>
            <input type="submit" />
         </form>
      </div>
      <div className="displayproduct">
          {<>
          <img src={images} alt={images} />
          <div className='ProductDetail'>
          <h6> <b>Name:</b> {name} </h6>
          <h6> <b>Price:</b> {strike_price}</h6>
          <h6> <b>Cat :</b> {category}</h6>
          <h6> <b>Discount:</b> {discount} </h6>
          <h6> <b>Size :</b> {size}</h6>
          <h6> <b>Brand :</b> {brand}</h6>
          <h6> <b>Title :</b> {title}</h6>
          </div>  
          </>}
      </div>  
    </div>    
  </div>
  )
}

export default AddProduct