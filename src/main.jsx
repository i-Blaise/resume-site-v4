import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  once: true,       // animate only once
  duration: 600,    // global animation duration (ms)
  offset: 100,      // trigger offset (px)
})

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
