import React from "react";
import './Footer.css';
import { NavLink,Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="main">
            {/* Logo Footer */}

            <div className="logo">
                <Link to="#">
                    <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        className="mr-3 h-12"
                        alt="Logo"
                    />
                </Link>
            </div>
            {/* Pages Footer */}
            <div className="pages-footer">
                <div className="resources">
                    <p><b>Resources</b></p>
                    <div className="link-res">
                        <ul><NavLink to="/">Home</NavLink></ul>
                        <ul><NavLink to="about">About</NavLink></ul>
                        <ul><NavLink to="contact">Contact</NavLink></ul>
                    </div>
                </div>
                <div className="follow">
                    <p><b>Follow Us</b></p>
                    <div className="link-follow">
                        <ul><Link to="#">X</Link></ul>
                        <ul><Link to="#">Github</Link></ul>
                        <ul><Link to="https://www.linkedin.com/in/vaibhavgupta-talksavy/">Linkedin</Link></ul>
                    </div>
                </div>
                <div className="legal">
                    <p><b>Legal</b></p>
                    <div className="link-legal">
                        <ul><Link to="#">Privacy Policy</Link></ul>
                        <ul><Link to="#">Terms & Condition</Link></ul>
                    </div>
                </div>


            </div>
        </div>
            

        
    )
}