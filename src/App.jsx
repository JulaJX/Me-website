//REACT COMPONENTS
import {Routes, Route} from 'react-router-dom'
//CUSTOM COMPONENTS
import Navbar from '../src/components/Navbar'
import Banner from '../src/components/Banner'
import Home from '../src/pages/home/Home'
import Portfolio from '../src/pages/portfolio/Portfolio'
import Contactcv from './pages/contactcv/contactcv'
import Project from './pages/portfolio/Project'
import { useState, useEffect } from 'react';
//STYLES
import './App.css'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);


  return (
    
    <div className="App">
        {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
      <div>
      <Navbar></Navbar> 
      {/* REACT ROUTER V6 */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contactcv" element={<Contactcv/>}/>
        <Route path="/portfolio/:id" element={<Project/>}/>
      </Routes>
      <Footer/>
      </div>)}
    </div>
  )
}

export default App
