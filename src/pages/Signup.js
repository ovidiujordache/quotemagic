import React, { useState } from "react";
import{NavBar,Header,Footer}from '../components';

 export default function Signup() { 
 return (
<div>
<NavBar/>


<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="text" name="name" />
  <input type="submit" value="Submit" />
</form>
</div>

  )
}


