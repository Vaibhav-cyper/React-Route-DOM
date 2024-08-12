import React from 'react' 
import { Link , NavLink } from 'react-router-dom';
import './Header.css'
export default function Header() {
    return(
        <header className='header'>
            <nav className="nav">
                <div className="logo-div">
                    <Link to="/">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                <div className="pages">
                    <NavLink to ="/" >
                    Home
                    </NavLink>
                    <NavLink to ="about" >
                    About
                    </NavLink>
                    <NavLink to ="contact" >
                    Contact
                    </NavLink>
                    <NavLink to ="github" >
                    Github
                    </NavLink>
                   
                </div>
                </div>
            </nav>
        </header>
    )
}