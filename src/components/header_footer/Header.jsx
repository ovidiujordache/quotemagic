import React from 'react'
import './header.css'
import headerimg from'../../images/Home_img.jpg'
const Header = () => {
  return (
    <div className="qm_header section_padding " id="home">
      <div className="qm_header-content">
        <h1 className="main-txt">Quoting Made Easy</h1>
        <p>Take the hassle out of quoting and invoicing,start your free trial today</p>
        <div className="qm_header-content_input">
          <input type="email" placeholder='Enter email address'/>
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className='qm_header-image'>
        <img src={headerimg}></img>
      </div>
    </div>
  )
}

export default Header