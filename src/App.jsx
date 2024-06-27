import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Tech from "./components/Tech"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
function App() {
  return (
    <>

    <Navbar/>
      <Hero/>
      <About/>
      <Tech/>
      <div className="bg-slate-200 ">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="0.4" d="M0,256L30,261.3C60,267,120,277,180,282.7C240,288,300,288,360,256C420,224,480,160,540,154.7C600,149,660,203,720,192C780,181,840,107,900,96C960,85,1020,139,1080,149.3C1140,160,1200,128,1260,106.7C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>      </div>
      <Education/>
      <Experience/>
      <Projects/>
      <Footer/>
   </>
   
  )
}

export default App
