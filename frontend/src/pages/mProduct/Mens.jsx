import React, { useEffect, useState } from "react";
import "./Mens.css"
import Sidebar from "./Sidebar";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from "../../redux/mReducer/actionType";
import { useLocation, useSearchParams } from "react-router-dom";
import mReducer from "../../redux/mReducer/mReducer";


function Mens() {

 const dispatch = useDispatch()
 
 const [searchParams] = useSearchParams()
 const initialOrder = searchParams.get("order")
 const initialPage = searchParams.get("page")
 const [order,setOrder] = useState(initialOrder||"")
 const location = useLocation()
 const [r,setR] = useState(0)
 const [page,setPage] = useState(initialPage)
 

 let obj = {
  brand:searchParams.getAll("brand"),
  strike_price:searchParams.get("price"),
  rating:searchParams.get("rating"),
  order:searchParams.get("order"),
  page:page
 }

 useEffect(()=>{
   dispatch(getProducts(obj))
 },[location.search,page])

 const {mProduct} = useSelector((store)=>store.mReducer)

  console.log(mProduct)

 const handleOrder =(e) =>{
   let value = e.target.value
   console.log(value)
   setOrder(value)
   obj ={order:searchParams.get("order"),}
 }

  return <div className="mens-main">
  <div className="mheader">
   <div className="mens-breadcrum"> Home / Clothing / Men T-Shirts </div>
   <div className="mens-itemno">Mens T-Shirt <span>- 234 items</span></div>
   <div className="mens-sort">
        <div>FILTERS</div>
        <div><select onChange={handleOrder} >
           <option value={""}>Sort by: PRICE</option>
           <option value={"asc"}>PRICE: LOW TO HIGH</option>
           <option value={"desc"}>PRICE: HIGH TO LOW</option>
        </select></div>
   </div>
   <hr></hr>
   </div>
   <div className="mens-comps">
    <Sidebar order={order}/>
    <div className="card-grid">
      {
        mProduct.map((el)=>(
        <Card key={el._id} {...el} r={r}/>
        ))
      }
    </div>
   </div>
   <hr></hr>
   <div className="mens-pagination">
    <button onClick={ ()=>setPage(1)}>1</button>
    <button onClick={ ()=>setPage(2)}>2</button>
    <button onClick={ ()=>setPage(3)}>3</button>
    <button onClick={ ()=>setPage(4)}>4</button>
    <button onClick={ ()=>setPage(5)}>5</button>
    <button onClick={ ()=>setPage(6)}>6</button>
    <button onClick={ ()=>setPage(7)}>7</button>
    <button onClick={ ()=>setPage(page+1)} style={{border:"1px solid #ced4da",padding:"4px"}}> NEXT </button>
   </div>
  </div>;
}

export default Mens;
