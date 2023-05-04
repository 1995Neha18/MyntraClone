import React, { useEffect, useState } from "react";
import "./Mens.css"
import Sidebar from "./Sidebar";
import Card from "./Card";
import axios from "axios"

function Mens() {

 const [data,setdata] = useState([])
 useEffect(()=>{
   axios.get("https://64537ab0c18adbbdfe9e5437.mockapi.io/product")
   .then((res)=>{setdata(res.data)})
 },[])

 console.log(data)

  return <div className="mens-main">
  <div className="mheader">
   <div className="mens-breadcrum"> Home / Clothing / Men T-Shirts </div>
   <div className="mens-itemno">Mens T-Shirt <span>- 234 items</span></div>
   </div>
   <div className="mens-comps">
    <Sidebar/>
    <div className="card-grid">
      {
        data.map((el)=>(
        <Card {...el}/>
        ))
      }
    </div>
   </div>
  </div>;
}

export default Mens;
