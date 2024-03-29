import NavBar from './Components/NavBar.js'
import Introduction from './Components/Introduction.js'
import Scroll from './Components/Scroll.js'
import About from './Components/About.js'
import './App.css'

function App() {
  return (
    <div className="main">
        <NavBar />
        <Introduction />
        <Scroll />
        <About />
    </div>
  )
}

export default App
