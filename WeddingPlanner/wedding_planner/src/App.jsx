import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Apparel from './components/Apparel';
import Ceremony from './components/Ceremony';
import Reception from './components/Reception';
import Footer from './components/Footer';

function App() {
 

  return (
     <>
     
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/ceremony" element={<Ceremony />} />
        <Route path="/reception" element={<Reception />} />
      </Routes>
      <Footer/>
    </Router>
     </>
  )
}

export default App
