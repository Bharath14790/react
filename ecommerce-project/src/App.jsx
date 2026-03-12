import{ Homepage } from './pages/homepg';
import { Routes, Route } from 'react-router-dom';
import { Checkout } from './pages/checkout';
import { Orders } from './pages/orders';
import { Track } from './pages/track';
import './App.css'
import axios from 'axios';
import { useEffect, useState } from "react"

function App() {

  const [cart, setcart] = useState([])
  const loadcart = async() => {
  const response = await axios.get('/api/cart-items?expand=product')
    setcart(response.data)
}
  useEffect(() =>{
  loadcart()
  }, [])
     
  return (
  <>
      <Routes>
        <Route index element={<Homepage  cart = {cart} loadcart = {loadcart}/>}></Route>
        <Route path = "checkout" element={ <Checkout cart = {cart}  loadcart = {loadcart} /> }></Route>
        <Route path = "order" element={ <Orders cart = {cart} /> }></Route>
        <Route path = "track" element={ <Track/> }></Route>
      </Routes>
      
  </>
   
  )
}

export default App
