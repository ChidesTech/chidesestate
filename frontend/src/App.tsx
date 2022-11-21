import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PropertiesManagementPage from './pages/PropertiesManagementPage';
import RegisterPage from './pages/RegisterPage';
import SubmitPropertyPage from './pages/SubmitPropertyPage';
import SubmitEstate from './pages/SubmitEstatePage';
import SinglePropertyPage from './pages/SinglePropertyPage';
import DashboardPage from './pages/DashboardPage';
import ListingsPage from './pages/ListingsPage';
import EstatesPage from './pages/EstatesPage';
import EstatesManagementPage from './pages/EstatesManagementPage';
function App() {
  return (
    <BrowserRouter>
    <Header/>
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/register' element={<RegisterPage/>}></Route>
    <Route path='/submit-property' element={<SubmitPropertyPage/>}></Route>
    <Route path='/submit-estate' element={<SubmitEstate/>}></Route>
    <Route path='/properties-management' element={<PropertiesManagementPage/>}></Route>
    <Route path='/property/:id' element={<SinglePropertyPage/>}></Route>
    <Route path='/dashboard' element={<DashboardPage/>}></Route>
    <Route path='/listings' element={<ListingsPage/>}></Route>
    <Route path='/estates-management' element={<EstatesManagementPage/>}></Route>
    <Route path='/profile' element={<EstatesManagementPage/>}></Route>
    <Route path='/estates' element={<EstatesPage/>}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
