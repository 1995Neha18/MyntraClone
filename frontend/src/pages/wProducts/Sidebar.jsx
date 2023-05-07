import React, { useEffect, useState } from "react";
import "../mProduct/Sidebar.css";
import ResetRating from "./ResetRating";
import { useSearchParams } from "react-router-dom";
import { filter } from "../../redux/mReducer/actionType";


function Sidebar({order}) {

  
  let [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand")
  const initialPrice = searchParams.get("price")
  const initialRating = searchParams.get("rating")
  const [brand,setBrand] = useState(initialBrand ||[])
  const [price,setPrice] = useState(initialPrice ||"")
  const [rating,setRating] = useState(initialRating||5)

  useEffect(()=>{
    let params = {
      brand
    }
    price && (params.price = price)
    rating && (params.rating = rating)
    order && (params.order = order)
    setSearchParams(params)
        
  },[brand,price,rating,order])

  const handleBrand = (e) =>{
    filter(e,brand,setBrand)
  } 

  const handlePrice = (e) =>{
      const value = e.target.value
      setPrice(value)
  }
  

  return (
    <div className="sidebar-main">
      <div className="sidebar-filter">
        <div>
          <div className="sidebar-filter-title">Rating</div>
          <div className="sidebar-checkox">
          <ResetRating setRating={setRating} />
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="sidebar-filter-title">BRAND</div>
          <div className="sidebar-checkox">
            <span>
              <input type="checkbox" value={"Roadster"} checked={brand.includes("Roadster")}  onChange={handleBrand} /> <label>Roadster</label>
            </span>
            <span>
              <input type="checkbox" value={"Indian Garage Co"} checked={brand.includes("Indian Garage Co")} onChange={handleBrand} /> <label>Indian Garage Co</label>
            </span>
            <span>
              <input type="checkbox" value={"Tommy Hilfiger"} checked={brand.includes("Tommy Hilfiger")} onChange={handleBrand} /> <label>Tommy Hilfiger</label>
            </span>
            <span>
              <input type="checkbox" value={"HIGHLANDER"} checked={brand.includes("HIGHLANDER")} onChange={handleBrand} /> <label>HIGHLANDER</label>
            </span>
            <span>
              <input type="checkbox" value={"SASSAFRAS"} checked={brand.includes("SASSAFRAS")} onChange={handleBrand} /> <label>SASSAFRAS</label>
            </span>
            <span>
              <input type="checkbox" value={"Varanga"} checked={brand.includes("Varanga")} onChange={handleBrand} /> <label>Varanga</label>
            </span>
            <span>
              <input type="checkbox" value={"Puma"} checked={brand.includes("Puma")} onChange={handleBrand} /> <label>Puma</label>
            </span>
            <span>
              <input type="checkbox" value={"WROGN"} checked={brand.includes("WROGN")} onChange={handleBrand} /> <label>WROGN</label>
            </span>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="sidebar-filter-title">PRICE</div>
          <div onClick={handlePrice} className="sidebar-checkox">
            <span>
              <input type="radio" checked={price=="Rs. 124 to Rs. 1793"} value={"Rs. 124 to Rs. 1793"} /> <label>Rs. 124 to Rs. 1793</label>
            </span>
            <span>
              <input type="radio" checked={price=="Rs. 1793 to Rs. 2462"} value={"Rs. 1793 to Rs. 2462"} /> <label>Rs. 1793 to Rs. 2462</label>
            </span>
            <span>
              <input type="radio" checked={price=="Rs. 2462 to Rs. 3200"} value={"Rs. 2462 to Rs. 3200"}/>  <label>Rs. 2462 to Rs. 3200</label>
            </span>
            <span>
              <input type="radio" checked={price=="Rs. 3200 to Rs. 7000"} value={"Rs. 3200 to Rs. 7000"} /> <label>Rs. 3200 to Rs. 7000</label>
            </span>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="sidebar-filter-title">COLOR</div>
          <div className="sidebar-checkox">
            <span>
              <input type="checkbox" /> <div className="product-color-black"></div> <label>Black</label>
            </span>
            <span>
              <input type="checkbox" /> <div className="product-color-blue"></div> <label>Blue</label>
            </span>
            <span>
              <input type="checkbox" /> <div className="product-color-white"></div> <label>White</label>
            </span>
            <span>
              <input type="checkbox" /> <div className="product-color-navyb"></div> <label>Navy Blue</label>
            </span>
            <span>
              <input type="checkbox" /> <div className="product-color-green"></div> <label>Green</label>
            </span>
            <span>
              <input type="checkbox" /> <div className="product-color-grey"></div> <label>Grey</label>
            </span>
            <span>
              <input type="checkbox" /> <div className="product-color-red"></div> <label>Red</label>
            </span>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="sidebar-filter-title">DISCOUNT RANGE</div>
          <div className="sidebar-checkox">
            <span>
              <input type="checkbox" />  <label>10% and above</label>
            </span>
            <span>
              <input type="checkbox" /> <label>20% and above</label>
            </span>
            <span>
              <input type="checkbox" />  <label>30% and above</label>
            </span>
            <span>
              <input type="checkbox" />  <label>40% and above</label>
            </span>
            <span>
              <input type="checkbox" />  <label>50% and above</label>
            </span>
            <span>
              <input type="checkbox" /> <label>60% and above</label>
            </span>
            <span>
              <input type="checkbox" /> <label>70% and above</label>
            </span>
            <span>
              <input type="checkbox" /> <label>80% and above</label>
            </span>
            <span>
              <input type="checkbox" /> <label>90% and above</label>
            </span>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Sidebar;
