import React, { useState } from "react";
import './navbar.css'
import { Link } from "react-scroll";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <div className="LogoContainer">
                <div className="Font_icon"><i class="fa-brands fa-slack"></i></div>
                <div><h1>Shivam Jaiswal</h1></div>
            </div>
            <div className="MenuList">
                <Link activeClass="active" to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="MenuListItem">Home</Link>
                <Link activeClass="active" to='Skills' spy={true} smooth={true} offset={-50} duration={500} className="MenuListItem">About</Link>
                <Link activeClass="active" to='Projects' spy={true} smooth={true} offset={-50} duration={500} className="MenuListItem">Experience</Link>
                <Link activeClass="active" to='Experience' spy={true} smooth={true} offset={-50} duration={500} className="MenuListItem">Education</Link>
            </div>
            <div className="button">
                <button className="btn ContactMe" onClick={()=>{
                    document.getElementById('ContactMe').scrollIntoView({behavior: 'smooth'})
                }}><i>Contact Me</i></button>
            </div>

            
            <i class="fa-solid fa-bars mobmenu" onClick={()=>setShowMenu(!showMenu)}></i>
            <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
                <Link activeClass="active" to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to='Skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to='Projects' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Experience</Link>
                <Link activeClass="active" to='Experience' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Education</Link>
                <Link activeClass="active" to='ContactMe' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;