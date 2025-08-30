import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import ContactUs from './pages/contactUs'
import AboutUs from './pages/AboutUs'
import Navbar from './Components/Navbar'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App
