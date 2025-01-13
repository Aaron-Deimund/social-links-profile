import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Banner from './components/Banner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Banner headerText = "Hello!" />
    <App />
  </StrictMode>,
)
