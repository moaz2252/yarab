import React, { useState } from 'react'
import './portfolio.css'

import image1 from '../../photos/poert1.png'
import image2 from '../../photos/port2.png'
import image3 from '../../photos/port3.png'

export default function Portfolio() {

  const images= [ image1,image2,image3,image1,image2,image3 ];

  const [curimage, setCurimage] = useState(null)


  
  return (


    <>
    <div className=' vh-100 my-5 py-5 d-fle justify-content-center align-items-center'>

      



        <div className="">
          
        <h2 className=' hala text-center text-uppercase fs-1 fw-bold'>portfolio component</h2>

          <div className=" mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
          <fa-icon className="fas fa-star p-3 "  ></fa-icon>
            <div id="line"></div>
          </div>


        </div>





        <div className="container">


            <div className="row">

              {images.map(  (img , index) => 



                    <div className="col-lg-4 " key={index}>


                <div className="por-image p-3">
                  <img onClick={ () => setCurimage(img)} src={img} className='w-100 rounded-3 ' alt="port" />
                    <div className="layer text-black"><i> <fa-icon class="fas fa-plus" ></fa-icon></i> </div>
                </div>

                
              </div>

)}
      
            </div>
        
        </div>


    </div>



{ curimage ?   <div onClick={ ( ) => setCurimage(null)} className=' position-fixed d-flex justify-content-center align-items-center end-0 cur end-0  start-0'> <img className=' w-50' src={curimage} alt="" /></div> : null }


    </>
  )
}
