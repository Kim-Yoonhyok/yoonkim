import './NavBarStyles.css'
import logo from '../../Images/logo.png'

function NavBar () {
    return (
        <nav className="navbar">
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
    )
}

export default NavBar
