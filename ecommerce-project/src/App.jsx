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
  useEffect(() =>{
          
          axios.get('/api/cart-items?expand=product')
          .then((response) => {
              setcart(response.data)
          })
      }, [])
  return (
  <>
      <Routes>
        <Route index element={<Homepage  cart = {cart}/>}></Route>
        <Route path = "checkout" element={ <Checkout cart = {cart}  /> }></Route>
        <Route path = "order" element={ <Orders/> }></Route>
        <Route path = "track" element={ <Track/> }></Route>
      </Routes>
      
  </>
   
  )
}

export default App
