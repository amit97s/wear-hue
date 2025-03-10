import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
import App from './App'
import { AuthProvider } from './context/auth'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App/>
  </AuthProvider>,
)
