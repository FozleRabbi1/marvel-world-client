import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './ComponentsFile/RouterFile/Router.jsx'
import AuthProvider from './ComponentsFile/AuthProviderFile/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
