import React, { useState } from 'react'
import styled from "../Css/AddProduct.modules.css"

const initial = {
  Name : "",
  Price : "",
  Size : "",
  ImageURL : "",
  Description : "",
  Category : "",
  Brand : ""
}

function AddProduct() {
  const [data,setdata] = useState(initial)
   const handleChange = (e)=>{
      const {name,value} = e.target
      setdata({
        ...data,
        [name] : value
      })
   }
   const handleSubmit  = (e)=>{
      e.preventDefault()
      console.log(data)
      setdata(initial)
   }
   console.log(data)
   const {Name,Price,Size,ImageURL,Description,Category,Brand} = data
  return (
     <div>
        <div className='headingflex'>
           <h1 className='addProduct'>Add Products</h1>
           <h6>Deepak Pandey</h6>
        </div>
         
      <div className="mainaddproduct">   
        <div className="form">
         <form action="">
            <label>Name : </label>
            <input type="text" placeholder='Product Name' onChange={handleChange} name="Name" value={Name}/>
            <label>Price : </label>
            <input type="text" placeholder='Price ₹' onChange={handleChange} name="Price" value={Price}/>
            <label>Size : </label>
            <input type="text"  placeholder='Size' onChange={handleChange} name="Size" value={Size}/>
            <label>Image : </label>
            <input type="text" placeholder='Image URL' onChange={handleChange} name="ImageURL" value={ImageURL}/>
            <label>Description : </label>
            <input type="text" placeholder='Description' onChange={handleChange} name="Description" value={Description}/>
            <label>Category : </label>
            <select name="Category" id="" onChange={handleChange} value={Category}>
               <option value="">Select Category</option>
               <option value="Tshirt">Tshirt</option>
               <option value="Jacket">Jacket</option>
            </select>
            <label>Brand : </label>
            <select name="Brand" id="" onChange={handleChange} value={Brand}>
               <option value="">Select Brand</option>
               <option value="ZARA">ZARA</option>
               <option value="Calvin Klein">Calvin Klein</option>
            </select>
         </form>
      </div>
      <div className="displayproduct">
          {<>
          <img src={ImageURL} alt={ImageURL} />
          <div className='ProductDetail'>
          <p> <b>Name:</b> {Name} </p>
          <p> <b>Price:</b> {Price}</p>
          <p> <b>Cat :</b> {Category}</p>
          <p> <b>Size :</b> {Size}</p>
          <p> <b>Brand :</b> {Brand}</p>
          <p> <b>Des :</b> {Description}</p>
          </div>  
          </>}
      </div>  
    </div>    
  </div>
  )
}

export default AddProduct