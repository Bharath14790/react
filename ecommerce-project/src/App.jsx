import{ Homepage } from './pages/homepg';
import { Routes, Route } from 'react-router-dom';
import { Checkout } from './pages/checkout';
import './App.css'

function App() {

  return (
  <Routes>
    <Route index element={<Homepage />}></Route>
    <Route path = "checkout" element={ <Checkout/> }></Route>
  </Routes>
   
  )
}

export default App
