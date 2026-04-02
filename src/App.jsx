import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import DataAnalyticsProjects from './components/DataAnalyticsProjects'
import UpcomingProjects from './components/UpcomingProjects'
import Experience from './components/Experience'
import Learning from './components/Learning'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <DataAnalyticsProjects />
        <UpcomingProjects />
        <Experience />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
