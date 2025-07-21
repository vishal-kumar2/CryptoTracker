import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Pricing from './pages/Pricing/Pricing'
import Features from './pages/Features/Features'
import Blog from './pages/Blog/Blog'
import SignUp from './pages/SignUp/SignUp'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
