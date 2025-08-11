import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'

export default function Nav() {

  const [scroll, setscroll] = useState(false)

 
    function handleScroll () {

    if(window.scrollY > 50){
      setscroll(true)
    }
    else{
      setscroll(false)
    }

  }


  useEffect(() =>{

  

  window.addEventListener('scroll' , handleScroll)



  return () => {
    window.removeEventListener('scroll' ,  handleScroll)
  } 


  }
,[])



  return (
    



<nav className={'navbar nav-col navbar-expand-lg  transition  fixed-top ' + (scroll && "py-4")} >
  <div className="container  fs-5 fw-bold">
    <NavLink className="navbar-brand noo fs-2 fw-bold nav-col" to="/">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink  className="nav-link nav-col  " to="/about">   About  </NavLink> 
        </li>

         <li className="nav-item">
          <NavLink  className="nav-link nav-col " to="/portfolio">   Portfolio  </NavLink> 
        </li>

         <li className="nav-item ">
          <NavLink  className="nav-link nav-col " to="/contact">   Contact  </NavLink> 
        </li>
      
      </ul>

    </div>
  </div>
</nav>














  )
}
