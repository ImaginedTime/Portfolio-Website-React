import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {
    let clicked = false;
	
	function handleHamburgerClick() {
		const navlinks = document.querySelector(".nav-links");
		const lines = document.querySelectorAll(".line");
		clicked = !clicked;
		if(clicked)
		{
			navlinks.classList.add("nav-links-active");
			lines.forEach((line) => line.classList.add("active"));
		}
		else{
			navlinks.classList.remove("nav-links-active");
			lines.forEach((line) => line.classList.remove("active"));
		}
	}

    return (
        <div className="navbar">
            <div className="logo">
                <img src="./images/logo.png" alt="Logo" />
            </div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about-me1">About Me</a>
                <a href="#skills1">Skills</a>
                <a href="#projects1">Projects</a>
                <a href="#contact-us1">Contact Me</a>
            </div>
            <div className="hamburger" onClick={handleHamburgerClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}
