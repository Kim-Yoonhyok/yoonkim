import './NavBarStyles.css'

function NavBar () {
    return (
        <nav className="navbar">
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
