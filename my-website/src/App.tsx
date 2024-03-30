import NavBar from './Components/NavBar.js'
import Introduction from './Components/Introduction.js'
import Scroll from './Components/Scroll.js'
import About from './Components/About.js'
import Experience from './Components/Experience.js'
import './App.css'


function App() {
  return (
    <div className="main">
        <NavBar />
        <Introduction />
        <Scroll />
        <About />
        <Experience />
    </div>
  )
}

export default App
