import React from 'react'
import "../styles/index.css"
import logo from "../image/ori.png"
import { ButtonSmall } from "./Button"


const Header = () => {
    return (
      <div className='h-auto bg-white sticky top-0 flex justify-between'>
        <img className='p-6 w-40 lg:w-2/12' src={logo} alt='logo'/>
        <div className='p-3'><ButtonSmall label="Login"/></div>
      </div>
    )
}

export default Header
