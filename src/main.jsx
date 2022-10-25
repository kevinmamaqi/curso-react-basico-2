import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import { Home } from './pages'
import 'modern-normalize/modern-normalize.css'
import { TestPage } from './pages/TestPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    <TestPage />
  </React.StrictMode>
)
