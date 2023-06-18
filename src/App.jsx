
import './App.css'
import Navbar from './Navbar.jsx';
import Countries from './CountriesWin/Countries.jsx';
import Country from './CountriesWin/Country.jsx';
import SearchBar from './CountriesWin/SearchBar'; 
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {

  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Countries />}/>
      <Route path="/countries/:countryName" element={<Country />}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
