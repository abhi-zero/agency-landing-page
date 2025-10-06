
import Navbar from './components/Navbar/Navbar'
import { AboutSection, HeroSetion, ProjectSection, ServiceSection, TestimonialSection } from './sections'

function App() {
  return (
    <div className='max-w-[1950px] overflow-x-hidden'>
      <Navbar />
      <HeroSetion />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
      <ProjectSection />
    </div>
  )
}

export default App
