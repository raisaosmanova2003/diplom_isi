import { useState } from 'react'
import './App.css'
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes"
// import MainContext from './context/context';

function App() {
  const contextData = {
    
  }
  const router = createBrowserRouter(ROUTES);
  return (
    <>
    
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>
       
    </>
  )
}

export default App
