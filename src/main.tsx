import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { App } from './components'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Hero from './page/hero';
import Auth from './page/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero /> 
  },
  {
    path: "/auth",
    element: <Auth /> 
  },
  
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
