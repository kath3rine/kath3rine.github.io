import React from 'react';
import {Link} from 'react-scroll';
const {Navbar}= () =>{
  return (
  <div className="navbar">
    <li>
        <Link to="/home">Home</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>  
    <li>
        <Link to="/experience">Experience</Link>
    </li>
  </div>
  );
};
export default Navbar