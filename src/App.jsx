import BackToTop from './components/common/BackToTop'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/layout/ScrollProgress'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Goals from './sections/Goals'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Goals />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
