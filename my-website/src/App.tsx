import NavBar from './Components/NavBar/NavBar.js'
import Introduction from './Components/Introduction/Introduction.js'
import Scroll from './Components/Scroll/Scroll.js'
import About from './Components/About/About.js'
import Experience from './Components/Experience/Experience.js'
import Contact from './Components/Contact/Contact.js'
import './App.css'


function App() {
  return (
    <div className="main">
        <NavBar />
        <Introduction />
        <Scroll />
        <About />
        <Experience />
        <Contact />
    </div>
  )
}

export default App
