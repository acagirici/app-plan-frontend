import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/college_applications' style={{paddingRight: '10px'}}>All Applications  </Link>
      <Link to='/college_applications/new'> Add Application</Link>
    </div>

  )
}

export default NavBar