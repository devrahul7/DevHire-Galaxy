import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Freelancerprofile from './components/Freelancerprofile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Freelancerprofile/>

  </StrictMode>,
)
