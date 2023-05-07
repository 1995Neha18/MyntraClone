import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Edit from '../pages/Edit';
import Mens from '../pages/mProduct/Mens';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/mens" element ={<Mens/>}/>
        <Route  path="/admin" element ={<Admin/>}/>
        <Route path='admin/:id' element= {<Edit/>}></Route>
        
    </Routes>
  )
}

export default AllRoutes;
