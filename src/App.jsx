
import Navbar from './components/Navbar/Navbar'
import { AboutSection, HeroSetion, ServiceSection } from './sections'

function App() {
  return (
    <div className='max-w-[1950px] overflow-x-hidden'>
      <Navbar />
      <HeroSetion />
      <AboutSection />
      <ServiceSection />
    </div>
  )
}

export default App
