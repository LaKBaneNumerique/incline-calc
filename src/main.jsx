import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.jsx'
import MentionsLegales from './MentionsLegales.jsx'
import CGU from './CGU.jsx'

// 🔥 INITIALISATION GOOGLE ANALYTICS
ReactGA.initialize('G-XXXXXXXXXX') // ⚠️ Remplace par TON ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgu" element={<CGU />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
