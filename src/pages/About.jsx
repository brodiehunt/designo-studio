import { aboutInfo } from '../data/about';

import AboutSection from '../components/about/AboutSection';
import FooterCallToAction from "../components/FooterCallToAction";
import FooterExtension from "../components/footer/FooterExtension";
import LocationsSection from '../components/locations/LocationsSection';

export default function About() {

  return (
    <div>
      <AboutSection info={aboutInfo.about} layout="right" theme="dark" type="hero"/>
      <AboutSection info={aboutInfo.realWorld} layout="left" theme="light" />
      <LocationsSection />
      <AboutSection info={aboutInfo.talent} layout="right" theme="light" />
      <FooterCallToAction />
      <FooterExtension />
    </div>
  )
}