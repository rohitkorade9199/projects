import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import MaterialsGuide from './components/MaterialsGuide';
import AboutUs from './components/AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Services' element={<Services/>}/>
        <Route path='/materials' element={<MaterialsGuide/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
