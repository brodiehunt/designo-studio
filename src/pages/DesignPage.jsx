import DesignHero from '../components/design/DesignHero';
import FooterCallToAction from '../components/FooterCallToAction';
import FooterExtension from '../components/footer/FooterExtension';
import { useLocation } from 'react-router-dom';

import { categories } from '../data/categories';

export default function DesignPage() {
  const location = useLocation();
  const pathName = location.pathname;
  const categoryInformation = categories.find((category) => {
    return pathName === `/design/${category.url}`;
  })

  return (
    <div>
      <DesignHero title={categoryInformation.title} content={categoryInformation.content}/>
      <FooterCallToAction />
      <FooterExtension />
    </div>
  )
}