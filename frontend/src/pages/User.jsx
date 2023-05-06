import React from 'react'

function User() {


   const handleSubmit = () =>{
      alert("USer is Added")
   }

   const handleChange = ()=>{

   }

  return (
    <div className="form">
    <form action="" onSubmit={handleSubmit}>
       <label>Name : </label>
       <input type="text" placeholder='User Name' onChange={handleChange} />
       <label>Email : </label>
       <input type="text" placeholder='Email ID' onChange={handleChange}  />
       <label>Password : </label>
        <input type="text" placeholder='Password' onChange={handleChange} />
        <label>City : </label>
        <input type="text"  placeholder='City' onChange={handleChange}  />
        <label>Profile : </label>
        <input type="text" placeholder='Profile URL' onChange={handleChange}  />
        <input type="submit" />
    </form>
    </div>   
  )
}

export default User