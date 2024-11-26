import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import TodosContextProvider from './contexts/TodosContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosContextProvider >
      <App />
    </TodosContextProvider>
  </StrictMode>,
)
