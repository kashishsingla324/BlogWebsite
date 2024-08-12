import React,{useState} from 'react'
import LoginButton from './Login'
import LogoutButton from './Logout'
import { useAuth0 } from "@auth0/auth0-react";
import './navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
    const { isAuthenticated } = useAuth0();
    const[active,setActive]=useState('nav_menu');
    const [toggleIcon,setToggleIcon]=useState('nav_toggler');
    const navToggle = () =>{
        active==='nav_menu' ? setActive('nav_menu nav_active') : setActive("nav_menu");
        toggleIcon === 'nav_toggler'?setToggleIcon('nav_toggler toggle'):setToggleIcon('nav_toggler');
    }
  return (
    <div><>
    <nav className="nav">
        <h1 className="nav_brand">Lifestyle Blender</h1>
        <ul className={active}>
            <li className="nav_item">
                <a href="#" className="nav_link">
                    <Link className="link" to="/" style={{textDecoration: 'none'}}>
              Home
            </Link>
            </a>
            </li>
            <li className="nav_item">
                <a href="#" className="nav_link"><Link className="link" to="/about" style={{textDecoration: 'none'}}>
              About
            </Link></a>
            </li>
            <li className="nav_item">
                <a href="#" className="nav_link">
                <Link className="link" to="/write" style={{textDecoration: 'none'}}>
             Create
            </Link> </a>
            </li>
            <li className="nav_item button" >
                <a href="#" className="nav_link">  {
        isAuthenticated ?  <LogoutButton/> : <LoginButton/>
    }  </a>
            </li>
            
            
        </ul>
        <div onClick={navToggle} className="nav_toggler">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
  
    
    
    </>
   
    </div>
  )
}

export default Navbar;
