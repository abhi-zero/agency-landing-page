import React from "react";
import { ServiceCard } from "../../components";
import mobileCard2Image from "../../assets/images/mobile/image-photography.jpg";
import desktopCard2Image from "../../assets/images/desktop/image-photography.jpg";
import mobileCard1Image from "../../assets/images/mobile/image-graphic-design.jpg";
import desktopCard1Image from "../../assets/images/desktop/image-graphic-design.jpg";

export default function ServiceSection() {
  return (
    <div id="service" className="md:grid md:grid-cols-2 max-width">
      <ServiceCard
        mobileImage={mobileCard1Image}
        desktopImage={desktopCard1Image}
        alt={"Image of chery on green bg"}
        heading={"Graphic design"}
        description={
          "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. "
        }
        bg={'greenExtraLight'}
        text={'greenLight'}
        varient={1}
      />
      <ServiceCard
        mobileImage={mobileCard2Image}
        desktopImage={desktopCard2Image}
        alt={"Image of Orange on green bg"}
        heading={"Photography"}
        description={
          "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        }
        bg={'blueExtraLight'}
        text={'blueDark'}
        varient={2}
      />
    </div>
  );
}
