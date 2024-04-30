import React  from 'react';

import NavigationBar from './Navigation'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'




const Layout = ({ cartItemCount }) => {
  return (
    <>
        <NavigationBar cartItemCount={cartItemCount} />
        <Outlet/>
        <Footer/>
    </>
    
  )
}

export default Layout