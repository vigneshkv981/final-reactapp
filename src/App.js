import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dash';
import Products from './products';
import Addproducts from './add-product';
import Accounts from './accounts';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/products' element={<Products/>}/>
      <Route path='/add-products' element={<Addproducts/>}/>
      <Route path='/accounts' element={<Accounts/>}/>
    </Routes>
  </Router>
  );
};

export default App;
