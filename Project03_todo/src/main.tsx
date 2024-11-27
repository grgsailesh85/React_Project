import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import TodosContextProvider from './contexts/TodosContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId="9fe4207c0c244eb0aa3e434c51a5b356"
      domain="https://selfbusiness.kinde.com"
      redirectUri={
        // conditional expression that checks the value of process.env.NODE_ENV to determine which URL to use, based on whether the application is running in a production or development environment.
        process.env.NODE_ENV === "production"
        ? "http://localhost:5173"
        : "https://react-project-jade-mu.vercel.app/"
      }
        
      logoutUri={
        process.env.NODE_ENV === "production"
        ? "http://localhost:5173"
        : "https://react-project-jade-mu.vercel.app/"
      }
      // used to conditionally enable or disable the use of localStorage in a React component
      isDangerouslyUseLocalStorage = {true}

	  >
      <TodosContextProvider >
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>,
)
