import './NavBarStyles.css'
import React, { useState, useEffect } from 'react'
import logo from '../../Images/logo.png'

function NavBar () {
    const [showNav, setShowNav] = useState(true)
    let lastScrollTop = 0

    useEffect(() => {
        const handleScroll = () => {
            let st = window.pageYOffset || document.documentElement.scrollTop
            console.log(st, lastScrollTop)
            if (st < lastScrollTop) {
                console.log('show')
                setShowNav(true)
                console.log(showNav)
            } else {
                setShowNav(false)
            }
            lastScrollTop = st <= 0 ? 0 : st
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    return (
        //<div className={showNav ? 'show' : 'hide'}>
            <nav className={"navbar"}>
                <img src={logo} alt='logo' className='logo'></img>
                <ul className="nav-list">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li>Projects</li>
                    <li><a href="#contact">Contact</a></li>
                    <a href="/resume.pdf" target="_blank">
                        <button className="resume-button">Resume</button>
                    </a>

                </ul>
            </nav>
        //</div>
    )
}

export default NavBar
