import React,{useState} from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../../images/Final_Logo.png'
import Signup  from '../../../pages/Signup'
import Login from '../../../pages/Login'


import { Link } from "gatsby"

import './navbar.css';

import { Router } from "@reach/router"

const Menu = () =>(
   <>
    <p><Link to="/">Home</Link></p>
    <p><a href ="#company" id="Company">Company</a></p>
    <p><a href ="#services" id="Services">Services</a></p>
    <p><a href ="#contact" id="Contact">Contact</a></p>
  </>
)

/*Navigation*/
const Navbar = () =>
 {
  const[signup,login] = useState(false,false);

    return (
      <div className="qm_Navbar">
        <div className="qm_Navbar-Links">
          <div className="qm_Navbar-Links_Logo">
          {/*<img src={logo} alt="quote_magic_Logo"></img>*/}
          <h1 className="logo-placeholder">QuoteMagic</h1>
          </div>

          <div className="qm_Navbar-Links_Container">
            <Menu/>
            <div>
          
              <NavbarSignup/>
            </div>
          </div>
          </div>


          
          

      </div>
      
    )
}


function NavbarSignup(){
    const[toggleMenu ,setToggleMenu] = useState(false,true);
    return (
<div >
  <div className="qm_Navbar-Login">
           <button type="button"><Link to="/Login">Login</Link></button>
            <button type="button"><Link to="/Signup">Sign up</Link></button>
          </div>

  <div className='qm_Navbar-Menu'>
            {toggleMenu
              ?<RiCloseLine color="#8da9ca" size={27} onClick={() => setToggleMenu(false)}/>
              :<RiMenu3Line color="#8da9ca" size={27} onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu &&(
              <div className="qm_Navbar-Menu_Container scale-up-center">
                  <div classname="qm_Navbar-Menu_Container-Links">
                    <Menu/>
                    <div className="qm_Navbar-Menu_Container-Links-Login">
                      <p>Signxx up</p>
                      <Link to="/Signup">Sign Up</Link>
                    </div>
                  </div>
              </div>
            )} 
        </div>
        </div>

        )
}
export default Navbar