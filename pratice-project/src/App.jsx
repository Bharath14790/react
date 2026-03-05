import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [windowWid, setwindowWid] = useState(window.innerWidth)
  const handle =  () => {
    setwindowWid(window.innerWidth)
  }
  useEffect( () => {
    window.addEventListener("resize", handle)
  }, [])
  
  return (
    <div>
      {windowWid}
    </div>
  )
}

export default App
