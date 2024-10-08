import React, { useState } from 'react'
import './navbar.css';
import {Link}  from 'react-scroll';
import menu from '../../assets/menuu.png'
import logo from '../../assets/logo.png';
function Navbar() {
  const[showMenu,setShowMenu]=useState(false);
  return (
    <nav className='navbar'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}><img src={logo} alt='logo' className='logo' /></Link>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem' >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem' >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem' >Porfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>
              <button className='desktopMenuItemList contactBtn'  onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}
            >Contact me</button>
            </Link>
        </div>
      
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display:showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={()=>setShowMenu(false)}>Porfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar;