import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ToriGate from './ToriGate.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToriGate />
  </StrictMode>,
)
