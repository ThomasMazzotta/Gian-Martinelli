import "./App.css"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <Projects />
      </main>
    </>
  )
}

export default App
