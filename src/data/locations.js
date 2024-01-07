//  Illustration svgs
import canadaIllustration from '../assets/shared/desktop/illustration-canada.svg';
import australiaIllustration from '../assets/shared/desktop/illustration-australia.svg';
import ukIllustration from '../assets/shared/desktop/illustration-united-kingdom.svg';

// Image maps
import canadaMapLarge from '../assets/locations/desktop/image-map-canada.png';
import canadaMapSmall from '../assets/locations/tablet/image-map-canada.png';
import australiaMapLarge from '../assets/locations/desktop/image-map-australia.png';
import australiaMapSmall from '../assets/locations/tablet/image-map-australia.png';
import ukMapLarge from '../assets/locations/desktop/image-map-united-kingdom.png';
import ukMapSmall from '../assets/locations/tablet/image-map-uk.png';




export const locations = [
  {
    location: 'Canada',
    svg: canadaIllustration,
    url: '/locations',
    alt: 'Illustration of CN Tower in Toronto',
    map: {
      small: canadaMapLarge,
      large: canadaMapSmall
    },
    address: {
      latitude: 43.64824,
      longitude: -79.37640,
      office: 'Designo Central Office',
      street: '3886 Wellington Street',
      city: 'Toronto, Ontario M9C 3J5',
    },
    contact: {
      mobile: '+1 253-863-8967',
      email: 'contact@designo.co'
    }
  },
  {
    location: 'Australia',
    svg: australiaIllustration,
    url: '/locations',
    alt: 'Illustration of the opera house',
    map: {
      small: australiaMapLarge,
      large: australiaMapSmall
    },
    address: {
      latitude: -33.85762,
      longitude: 151.21532,
      office: 'Designo AU Office',
      street: '19 Balonne Street',
      city: 'New South Wales 2443',
    },
    contact: {
      mobile: '(02) 6720 9092',
      email: 'contact@designo.au'
    }
  },
  {
    location: 'United Kingdom',
    svg: ukIllustration,
    alt: 'Illustration of Tower Bridge in london',
    url: '/locations',
    map: {
      small: ukMapLarge,
      large: ukMapSmall
    },
    address: {
      latitude: 51.50068,
      longitude: -0.12433,
      office: 'Designo UK Office',
      street: '13  Colorado Way',
      city: 'Rhyd-y-fro SA8 9GA',
    },
    contact: {
      mobile: '078 3115 1400',
      email: 'contact@designo.uk'
    }
  },
]