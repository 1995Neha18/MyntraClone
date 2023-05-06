import React, { useEffect, useState } from "react";
import "./Mens.css"
import Sidebar from "./Sidebar";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from "../../redux/mReducer/actionType";


function Mens() {

 const dispatch = useDispatch()

 useEffect(()=>{
   dispatch(getProducts)
 },[])

 const {mProduct} = useSelector((store)=>store.mReducer)


  return <div className="mens-main">
  <div className="mheader">
   <div className="mens-breadcrum"> Home / Clothing / Men T-Shirts </div>
   <div className="mens-itemno">Mens T-Shirt <span>- 234 items</span></div>
   <div className="mens-sort">
        <div>FILTERS</div>
        <div><select>
           <option value={""}>Sort by: PRICE</option>
           <option value={"low"}>PRICE: LOW TO HIGH</option>
           <option value={"high"}>PRICE: HIGH TO LOW</option>
        </select></div>
   </div>
   <hr></hr>
   </div>
   <div className="mens-comps">
    <Sidebar/>
    <div className="card-grid">
      {
        mProduct.map((el)=>(
        <Card key={el._id} {...el}/>
        ))
      }
    </div>
   </div>
   <hr></hr>
   <div className="mens-pagination">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button style={{border:"1px solid #ced4da",padding:"4px"}}> NEXT </button>
   </div>
  </div>;
}

export default Mens;
