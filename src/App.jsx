import React from 'react'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Shpcategory from './Components/Page/Shpcategory'
import Shop from './Components/Page/Shop'
import Cart from './Components/Page/Cart'
import Product from './Components/Page/Product'
import LoginSignup from './Components/Page/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'




function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/mens'element={<Shpcategory banner={men_banner} category="men"/>}/>
        <Route path='/womens'element={<Shpcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids'element={<Shpcategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
       
        
       



      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App

