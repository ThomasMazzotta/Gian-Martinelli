import "./App.css"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Gallery from "./components/Gallery"
import Curriculum from "./components/Curriculum"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <Projects />
        <Gallery />
        <Curriculum />
      </main>
    </>
  )
}

export default App
