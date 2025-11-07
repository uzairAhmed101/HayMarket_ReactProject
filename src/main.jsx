import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'

// Polyfill for older browsers
if (typeof IntersectionObserver === 'undefined') {
  import('intersection-observer')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)