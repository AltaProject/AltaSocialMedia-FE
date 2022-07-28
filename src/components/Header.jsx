import React from 'react'
import "../styles/index.css"
import logo from "../image/ori.png"
import { ButtonSmall } from './Button'
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  let location = useLocation();
  console.log(location);
    return (
      <div className='h-18 bg-white sticky top-0 flex justify-between'>
        <Link to="/"><img className='w-36 p-6 lg:w-2/12' src={logo} alt='logo'/>
        </Link>
        <div className='p-3'>
          <Link to="/signup">
          {location.pathname==="/afterlogin"? <div><ButtonSmall label="Logout"/>
          <p>My Profile</p></div>: <ButtonSmall label="Login"/>}
          </Link>
        </div>
      </div>
    )
}


export default Header;
