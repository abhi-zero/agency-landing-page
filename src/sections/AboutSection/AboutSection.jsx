import { AboutCard } from '../../components'
import mobileCard1Image from '../../assets/images/mobile/image-transform.jpg'
import desktopCard1Image from '../../assets/images/desktop/image-transform.jpg'
import mobileCard2Image from '../../assets/images/mobile/image-stand-out.jpg'
import desktopCard2Image from '../../assets/images/desktop/image-stand-out.jpg'

export default function AboutSection() {
  return (
    <div className='max-width' id='about'>
       <div>
         <AboutCard
            heading={"Transform your brand"}
            description={"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."}
            mobileImage={mobileCard1Image}
            desktopImage={desktopCard1Image}
            alt={'Image of egg on Yellow background'}
            varient={1}
            bg={'yellow'}
            linkText={'Learn more'}
        />
       </div>
        <div>
         <AboutCard
            heading={"Stand out to the right audience"}
            description={"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."}
            mobileImage={mobileCard2Image}
            desktopImage={desktopCard2Image}
            alt={'Image of wine glass on red background'}
            varient={2}
            bg={'redLight'}
            linkText={'Learn more'}
        />
       </div>
    </div>
  )
}
