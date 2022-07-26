import React, { Component } from 'react'
import "../styles/index.css"
import logo from "../image/ori.png"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <div className='h-18 bg-slate-400'>
        <img className='w-32 p-6' src={logo} alt='logo'/>
        
      </div>
    )
}

export default Header
