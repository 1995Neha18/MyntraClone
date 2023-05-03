import React from "react";
import "./Mens.css"
import Sidebar from "./Sidebar";
import Card from "./Card";

function Mens() {
  return <div className="mens-main">
   <div className="mens-breadcrum"> Home / Clothing / Men T-Shirts </div>
   <div className="mens-itemno">Mens T-Shirt <span>- 234 items</span></div>
   <div className="mens-comps">
    <Sidebar/>
    <Card/>
   </div>
  </div>;
}

export default Mens;
