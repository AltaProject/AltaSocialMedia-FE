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
          <Link to="/login">
          {location.pathname==="/afterlogin" || location.pathname==="/comment" || location.pathname==="/profile"  ? <div><ButtonSmall label="Logout"/><Link to="/profile"><p>My Profile</p></Link></div>
          :<ButtonSmall label="Login"/>}
          </Link>
          {/* {location.pathname==="/profile" ? <ButtonSmall label="Logout"/>
          :<ButtonSmall label="Login"/>} */}
          
        </div>
      </div>
    )
}


export default Header;
