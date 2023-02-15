import * as React from 'react'

import './App.css'
import './index.css'
import{CTA,Brand,NavBar,Header,Footer}from '../components';

export default function IndexPage() 
{
  return (
    <div className="App">
        <div className='gradient_Bg'>
            <NavBar/>
            <Header/>
        </div>
        <Brand/>
     
        <Footer/>
    </div>
  )
}
