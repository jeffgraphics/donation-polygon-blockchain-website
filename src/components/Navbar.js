import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            <img src="C:\Users\dell\donation-polygon-blockchain-website\public\images\Logo_white.png" alt="community logo"/>
        </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar