import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Edit from '../pages/Edit';
import Mens from '../pages/mProduct/Mens';
import Womens from '../pages/wProducts/Womens';
import Login from '../pages/Login/Login';

import { SearchProduct } from './SearchProduct';

import PrivateRoute from './PrivateRoute';
import SinglePoduct from "../pages/SingleProductPage"
import {SearchProduct} from "../components/SearchProduct"
import SearchMain from './SearchMain';



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mens" element={
        <PrivateRoute>
          <Mens/>
        </PrivateRoute>
        } />
        <Route path="/Womens" element={<Womens/>} />
        <Route path="Mens/:id" element={<SinglePoduct/>} />
        <Route path="search/:keyword" element={<SearchMain/>} />
        <Route path="/Login" element={<Login/>} />
        <Route  path="/admin" element ={<Admin/>}/>
        <Route  path="/search" element ={<SearchProduct/>}/>
        <Route path='admin/:id' element= {<Edit/>}></Route>
    </Routes>
  )
}

export default AllRoutes;
