import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const [data,setdata] = useState([])
  const navigate = useNavigate()
  const {id} = useParams()
  
  useEffect(()=>{
    axios.get(`https://reqres.in/api/users/${id}`)
    .then((res)=>{
      setdata(res.data.data)
    })
  },[])
 
  const handleChange = (e)=>{
     const [name,value] = e.target
     setdata((prev)=>[{...prev,[name] : value}])
  }
  
  const handleSubmit = ()=>{
     alert("Product is Edited")
     navigate("/admin")
  }
   const {avatar,email,first_name,last_name} = data
  return (
    <div>
        <div className='headingflex'>
           <h1 className='addProduct'>Edit Products ID : {id}</h1>
           {/* <h6>Deepak Pandey</h6> */}
        </div>
         
      <div className="mainaddproduct">   
        <div className="form">
         <form action="" onSubmit={handleSubmit}>
            <label>Name : </label>
            <input type="text" placeholder='Product Name' onChange={handleChange} name="Name" value={email} />
            <label>Price : </label>
            <input type="text" placeholder='Price ₹' onChange={handleChange} name="Price" />
            <label>Size : </label>
            <input type="text"  placeholder='Size' onChange={handleChange} name="Size" />
            <label>Image : </label>
            <input type="text" placeholder='Image URL' onChange={handleChange} name="ImageURL"  />
            <label>Description : </label>
            <input type="text" placeholder='Description' onChange={handleChange} name="Description"  />
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
            <input type="submit" />
         </form>
      </div>
      <div className="displayproduct">
          {<>
          <img  alt="{ImageURL}" />
          <div className='ProductDetail'>
          <h6> <b>Name:</b>  </h6>
          <h6> <b>Price:</b> </h6>
          <h6> <b>Cat :</b> </h6>
          <h6> <b>Size :</b> </h6>
          <h6> <b>Brand :</b> </h6>
          <h6> <b>Des :</b> </h6>
          </div>  
          </>}
      </div>  
    </div>    
  </div>
  )
}

export default Edit