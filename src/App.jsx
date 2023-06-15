//REACT COMPONENTS
import {Routes, Route} from 'react-router-dom'
//CUSTOM COMPONENTS
import Navbar from '../src/components/Navbar'
import Banner from '../src/components/Banner'
import Home from '../src/pages/home/Home'
import Portfolio from '../src/pages/portfolio/Portfolio'
import Contactcv from './pages/contactcv/contactcv'
import Project from './pages/portfolio/Project'
//STYLES
import './App.css'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar> 
      {/* REACT ROUTER V6 */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contactcv" element={<Contactcv/>}/>
        <Route path="/portfolio/:id" element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
