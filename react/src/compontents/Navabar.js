import React from 'react'
import "./Navabar.css"
import Navs from './Navs'

function Navabar() {
  return (
    <div>
    <Navs />
    <div className='nav'>
        <img src='https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg' />
    </div>
    </div>
  )
}

export default Navabar