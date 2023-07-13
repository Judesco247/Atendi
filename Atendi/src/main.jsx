import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About_us.jsx'
import Services from './pages/Services.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "services",
    element: <Services />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
