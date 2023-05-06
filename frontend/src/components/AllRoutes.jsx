import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Edit from '../pages/Edit';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/admin" element ={<Admin/>}/>
        <Route path='admin/:id' element= {<Edit/>}></Route>
    </Routes>
  )
}

export default AllRoutes;
