import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Edit from '../pages/Edit';
import Delete from '../pages/Delete';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/admin" element ={<Admin/>}/>
        <Route path='admin/:id' element= {<Edit/>}></Route>
        <Route path='admin/delete/:id' element={<Delete/>}></Route>
    </Routes>
  )
}

export default AllRoutes;
