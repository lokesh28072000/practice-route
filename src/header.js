import React from "react";
import { Link } from "react-router-dom";
// import { Home } from './pages/home';
// import {Contact} from './pages/contact';
// import {About} from './pages/about';

import "./App.css"

 function Header() {
  return (
    <div>
        <nav className="navbar">
            <ul>
                
             <li>
             <Link to='/home'>home</Link>
             </li>

             <li>
             <Link to="/about">about</Link>
             </li>
             
            <li>
                <Link to="/contact">contact</Link>
            </li>

            </ul>
        </nav>
    </div>
  )
}

export default  Header;