import CategoriesSection from "../components/CategoriesSection"
import HomeHero from "../components/HomeHero"
import ValuesSection from "../components/values/ValuesSection";
import FooterCallToAction from "../components/FooterCallToAction";
import FooterExtension from "../components/footer/FooterExtension";

export default function Home(){
  return (
    <div>
      <HomeHero />
      <CategoriesSection />
      <ValuesSection />
      <FooterCallToAction />
      <FooterExtension />
    </div>
  )
}