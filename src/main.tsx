import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import GameApp from './GameApp.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GameApp />
    </Provider>
  </StrictMode>
)
