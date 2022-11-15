import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { Home, Ejercicios, Flex, Checkout } from './pages'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from 'react-router-dom'
import 'modern-normalize/modern-normalize.css'

const House = () => {
  const params = useParams()
  console.log(params)
  return <p>Soy una casa</p>
}

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
  {
    element: <House />,
    path: '/:id',
  },
  {
    element: <Ejercicios />,
    path: '/ejercicios',
  },
  {
    element: <Flex />,
    path: '/flex',
  },
  {
    element: <Checkout />,
    path: '/checkout',
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
