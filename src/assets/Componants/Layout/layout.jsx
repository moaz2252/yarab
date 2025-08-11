import React from 'react'
import Nav from '../Navbar/nav'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
return (
<>
<Nav/>




<Outlet />


<Footer/>

</>

)
}
