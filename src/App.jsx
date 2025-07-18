import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
      
    </div>
  )
}

export default App
