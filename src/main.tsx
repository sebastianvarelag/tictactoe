import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import GameApp from './GameApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameApp />
  </StrictMode>
)
