import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const useScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }

    scrollToTop()

    window.onpopstate = scrollToTop; 

    return () => {
      window.onpopstate = null;
    };
  }, [pathname]);

}

export default useScroll;