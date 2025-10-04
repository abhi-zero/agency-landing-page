
import Button from './components/ui/Button/Button'
import Navbar from './components/Navbar/Navbar'
import { AboutSection, HeroSetion } from './sections'

function App() {
  return (
    <div className='max-w-[1950px] overflow-x-hidden'>
      <Navbar />
      <HeroSetion />
      <AboutSection />
    </div>
  )
}

export default App
