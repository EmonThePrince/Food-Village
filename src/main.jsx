import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import Catagory from './components/Catagory.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Signin from './components/Signin.jsx';
import FoodItems from './components/FoodItems.jsx';
import ItemDetails from './ItemDetails.jsx';






const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'catagory',
        loader:() => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element:<Catagory />,
        children: [
          {
            path:":elements",
            element:<FoodItems />
          }
        ]
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'contact',
        element:<Contact />
      },
      {
        path:'login',
        element:<Login />
      },
      {
        path:'signin',
        element:<Signin />
      },
      {
        path:'details/:id',
        element:<ItemDetails />

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider>

    <RouterProvider router={router} />
  </ThemeProvider>
  </React.StrictMode>
)
