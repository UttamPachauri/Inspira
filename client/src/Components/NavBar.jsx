import React from 'react'
import "../Styles/NavBar.css"
const NavBar = () => {
  return (
    <nav className='nav-main'>
        <div className='nav-logo'>Inspira</div>
            <ul className='nav-list'>
                <li>Home</li>
                <li>About</li>
                <li>Images</li>
                <li>Contact Us</li>

            </ul>
      
        <div>
            <button className='nav-button'>
                Login
            </button>
        </div>
    </nav>
  )
}

export default NavBar