import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
export default App
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/Componants/Home/home'
import About from './assets/Componants/About/about'
import Portfolio from './assets/Componants/Portofolio/portfolio'
import Contact from './assets/Componants/Contact/contact'
import Error from './assets/Componants/Error/error'
import Layout from './assets/Componants/Layout/layout'






function App() {
    
 
 
 let router= createBrowserRouter([


   {
    path:'', element:<Layout/>, children:[
  
  {
    index:true , element:<Home/>
  },

  {
      path:'about', element:<About/>
  },

  {
    path:'home', element:<Home/>
  },

 {
    path:'portfolio', element:<Portfolio/>
  },

  {
    path:'contact', element:<Contact/>
  },

  {
    path:'*', element:<Error/>
  }
]
},
  ]
  
  )

    return (
      <>

      
      <RouterProvider router={router}/>
      

    </>
  )
}





