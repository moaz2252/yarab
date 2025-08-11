import React from 'react'
import './contact.css'

export default function Contact() {
  return (


    <>

  <div className="contact-com vh-100 pt-5">
      <div className='m-5 '>


        <h2 className=' hala text-center  fs-1 fw-bold'> Contact Section</h2>

          <div className=" mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
          <fa-icon className="fas fa-star p-3 "  ></fa-icon>
            <div id="line"></div>
          </div>


    </div>










 <form className=' d-flex justify-content-center align-items-center flex-column'>

  <div className="mb-5 w-100">
    <input type="email" className="form-control w-50 m-auto border-0 border-bottom "  placeholder='userName' aria-describedby="emailHelp" />
    
  </div>

  <div className="mb-5 w-100">
    <input type="password" className="form-control w-50 m-auto  border-0 border-bottom" placeholder='userAge'  />
  </div>

   <div className="mb-5 w-100">
    <input type="password" className="form-control w-50 m-auto  border-0 border-bottom" placeholder='userEmail '  />
  </div>

   <div className="mb-5 w-100">
    <input type="password" className="form-control w-50 m-auto border-0 border-bottom" placeholder='userPassword '  />
  </div>

  
  <div className='  btn-mo w-100   '>
    <button type='submit'   className='btn btn-success border-0'>Send Message</button>
  </div>

  
</form>

  </div>
</>
  )
}
