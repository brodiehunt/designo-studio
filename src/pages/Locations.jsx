import FooterCallToAction from '../components/FooterCallToAction';
import FooterExtension from '../components/footer/FooterExtension';
import LocationCard from '../components/locations/LocationCard';
import { locations } from '../data/locations';

export default function Locations() {
  return (
    <div>
      {locations.map((location, index) => {
        return (
          <LocationCard 
            key={index} 
            location={location}
            layout={index % 2}
          />
        )
      })}
      <FooterCallToAction />
      <FooterExtension />
    </div>
  )
}