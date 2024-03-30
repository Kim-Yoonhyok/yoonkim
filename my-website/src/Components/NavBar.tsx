import './NavBarStyles.css'
import logo from '../Images/logo.png'

function NavBar () {
    return (
        <nav className="navbar">
            <img src={logo} alt='logo' className='logo'></img>
            <ul className="nav-list">
                <li>About</li>
                <li>Experiences</li>
                <li>Projects</li>
                <li>Contact</li>
                <button className="resume-button">Resume</button>
            </ul>
        </nav>
    )
}

export default NavBar
