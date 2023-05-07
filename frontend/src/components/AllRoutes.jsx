import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Edit from '../pages/Edit';
import Mens from '../pages/mProduct/Mens';
import Womens from '../pages/wProducts/Womens';
import Login from '../pages/Login/Login';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mens" element={<Mens/>} />
        <Route path="/Womens" element={<Womens/>} />
        <Route path="/Login" element={<Login/>} />
        <Route  path="/admin" element ={<Admin/>}/>
        <Route path='admin/:id' element= {<Edit/>}></Route>
        
    </Routes>
  )
}

export default AllRoutes;
