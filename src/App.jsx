import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import ContactUs from './pages/contactUs'
import AboutUs from './pages/AboutUs'
import Navbar from './Components/Navbar'
import Footer from './pages/Footer'
import AllProducts from './pages/AllProducts'
import NotFound from './pages/NotFound/Index'
import ProductsDetails from './pages/ProductsDetails'
import CategoriePage from './pages/CategoriesPages'
import SearchCategorie from './pages/SearchCategorie'
import AddtoCard from './pages/AddtoCard/AddtoCard'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Search/:query" element={<SearchCategorie />} />
        <Route path="/AllProducts/:id" element={<ProductsDetails />} />
        <Route path="/categorie/:categoryName" element={<CategoriePage />} />
        <Route path="/add-to-card" element={<AddtoCard />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App
