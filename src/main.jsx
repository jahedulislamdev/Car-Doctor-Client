import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes'
import Auth from './Provider/Auth'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth>
      <RouterProvider router={route} />
    </Auth>
  </StrictMode>,
)
