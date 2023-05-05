import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-main">
      <div>FILTERS</div>
      <div className="sidebar-filter">
        <div>
          <div className="sidebar-filter-title">CATEGORIES</div>
          <div className="sidebar-checkox">
            <span>
              <input type="checkbox" /> <label>Tshirt</label>
            </span>
            <span>
              <input type="checkbox" /> <label>Tshirt</label>
            </span>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="sidebar-filter-title">BRAND</div>
          <div className="sidebar-checkox">
            <span>
              <input type="checkbox" /> <label>Roadster</label>
            </span>
            <span>
              <input type="checkbox" /> <label>Friskers</label>
            </span>
            <span>
              <input type="checkbox" /> <label>Tommy Hilfiger</label>
            </span>
            <span>
              <input type="checkbox" /> <label>Jack & Jones</label>
            </span>
            <span>
              <input type="checkbox" /> <label>HRX by Hrithik</label>
            </span>
            <span>
              <input type="checkbox" /> <label>U.S. Polo Assn</label>
            </span>
            <span>
              <input type="checkbox" /> <label>Puma</label>
            </span>
            <span>
              <input type="checkbox" /> <label>WROGN</label>
            </span>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="sidebar-filter-title">PRICE</div>
          <div className="sidebar-checkox">
            <span>
              <input type="checkbox" /> <label>Rs. 124 to Rs. 3793</label>
            </span>
            <span>
              <input type="checkbox" /> <label>Rs. 3793 to Rs. 7462</label>
            </span>
            <span>
              <input type="checkbox"/>  <label>Rs. 7462 to Rs. 11131</label>
            </span>
            <span>
              <input type="checkbox" /> <label>Rs. 11131 to Rs. 14800</label>
            </span>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="sidebar-filter-title">PRICE</div>
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