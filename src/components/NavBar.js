import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {

  return (
    <div id="nav">
      <Link to='/college_applications'>All Applications</Link>
      <Link to='/college_applications/new'>Add Application</Link>
    </div>

  )
}

export default NavBar