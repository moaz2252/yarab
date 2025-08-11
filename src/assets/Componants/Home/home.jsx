import React from 'react'
import img from '../../photos/avataaars.svg'
import './home.css'
import { ReactTyped } from "react-typed";


export default function Home() {
  return (
    <div className='bgg  vh-100 d-flex justify-content-center  align-items-center flex-column' >

      
      <div className= ' mb-2 my-image '>

            <img src={img} alt="home"  className='' />

      </div>


        <h1 className=' fs-1 mt-5 text-uppercase fw-bold text-white '>start framwork</h1>
      

       <div className=" text-white mt-3 mb-3 d-flex justify-content-center align-items-center">
         
         
         
            <div id="line" className=' bg-white '></div>
          <fa-icon className="fas fa-star p-3 "  ></fa-icon>
            <div id="line" className=' bg-white '></div>
          </div>


          <ReactTyped className=' fs-3 fw-bold text-light' strings={["Graphic Artist", "Web Designe", "Illustrator"]} loop typeSpeed={40} />



    </div>
  )
}
