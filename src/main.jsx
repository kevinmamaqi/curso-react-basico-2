import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home, Ejercicios } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'modern-normalize/modern-normalize.css'

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
  {
    element: <Ejercicios />,
    path: '/ejercicios',
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
