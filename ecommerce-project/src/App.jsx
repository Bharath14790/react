import{ Homepage } from './pages/homepg';
import { Routes, Route } from 'react-router-dom';
import { Checkout } from './pages/checkout';
import { Orders } from './pages/orders';
import { Track } from './pages/track';
import './App.css'

function App() {

  return (
  <>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path = "checkout" element={ <Checkout/> }></Route>
        <Route path = "order" element={ <Orders/> }></Route>
        <Route path = "track" element={ <Track/> }></Route>
      </Routes>
      
  </>
   
  )
}

export default App
