
import Navbar from './components/Navbar/Navbar'
import { AboutSection, Footer, HeroSetion, ProjectSection, ServiceSection, TestimonialSection } from './sections'

function App() {
  return (
    <div className='max-w-[1950px] overflow-x-hidden'>
      <Navbar />
      <HeroSetion />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
      <ProjectSection />
      <Footer />
    </div>
  )
}

export default App
