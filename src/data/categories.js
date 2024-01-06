// Web design link card images
import webDesignDesktop from '../assets/home/desktop/image-web-design-large.jpg';
import webDesignDesktopSmall from '../assets/home/desktop/image-web-design-small.jpg';
import webDesignTablet from '../assets/home/tablet/image-web-design.jpg';
import webDesignMobile from '../assets/home/mobile/image-web-design.jpg';

// App design link card images
import appDesignDesktop from '../assets/home/desktop/image-app-design.jpg';
import appDesignTablet from '../assets/home/tablet/image-app-design.jpg';
import appDesignMobile from '../assets/home/mobile/image-app-design.jpg';

// Graphic design link card images
import graphicDesignDesktop from '../assets/home/desktop/image-graphic-design.jpg';
import graphicDesignTablet from '../assets/home/tablet/image-graphic-design.jpg';
import graphicDesignMobile from '../assets/home/mobile/image-graphic-design.jpg';

// Web design project images
import webDesignExpress from '../assets/web-design/desktop/image-express.jpg';
import webDesignTransfer from '../assets/web-design/desktop/image-transfer.jpg';
import webDesignPhoton from '../assets/web-design/desktop/image-photon.jpg';
import webDesignBuilder from '../assets/web-design/desktop/image-builder.jpg';
import webDesignBlogr from '../assets/web-design/desktop/image-blogr.jpg';
import webDesignCamp from '../assets/web-design/desktop/image-camp.jpg';

// App design project images
import appDesignAirfilter from '../assets/app-design/desktop/image-airfilter.jpg';
import appDesignEyecam from '../assets/app-design/desktop/image-eyecam.jpg';
import appDesignFaceit from '../assets/app-design/desktop/image-faceit.jpg';
import appDesignTodo from '../assets/app-design/desktop/image-todo.jpg';
import appDesignLoopStudios from '../assets/app-design/desktop/image-loopstudios.jpg';

// Graphic design project images
import graphicDesign1  from '../assets/graphic-design/desktop/image-change.jpg';
import graphicDesign2  from '../assets/graphic-design/desktop/image-boxed-water.jpg'
import graphicDesign3  from '../assets/graphic-design/desktop/image-science.jpg';

export const categories = [
  {
    url: 'web-design',
    title: 'Web Design',
    content: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    projects: [
      {
        title: 'Express',
        content: 'A multi-carrier shipping website for ecommerce businesses',
        img: webDesignExpress
      },
      {
        title: 'Transfer',
        content: 'Site for low-cost money transfers and sending money within seconds',
        img: webDesignTransfer
      },
      {
        title: 'Photon',
        content: 'A state-of-the-art music player with high-resolution audio and DSP effects',
        img: webDesignPhoton
      },
      {
        title: 'Builder',
        content: 'Connects users with local contractors based on their location',
        img: webDesignBuilder
      },
      {
        title: 'Blogr',
        content: 'Blogr is a platform for creating an online blog or publication',
        img: webDesignBlogr
      },
      {
        title: 'Camp',
        content: 'Get expert training in coding, data, design, and digital marketing',
        img: webDesignCamp
      },
    ]
  },
  {
    url: 'app-design',
    title: 'App Design',
    content: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    projects: [
      {
        title: 'Airfilter',
        content: 'Solving the problem of poor indoor air quality by filtering the air',
        img: appDesignAirfilter
      },
      {
        title: 'Eyecam',
        content: 'Product that lets you edit your favorite photos and videos at any time',
        img: appDesignEyecam
      },
      {
        title: 'Faceit',
        content: 'Get to meet your favorite internet superstar with the faceit app',
        img: appDesignFaceit
      },
      {
        title: 'Todo',
        content: 'A todo app that features cloud sync with light and dark mode',
        img: appDesignTodo
      },
      {
        title: 'Loopstudios',
        content: 'A VR experience app made for Loopstudios',
        img: appDesignLoopStudios
      },
    ]
  },
  {
    url: 'graphic-design',
    title: 'Graphic Design',
    content: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    projects: [
      {
        title: 'Tim Brown',
        content: "A book cover designed for Tim Brown’s new release, ‘Change’",
        img: graphicDesign1
      },
      {
        title: 'Boxed Water',
        content: 'A simple packaging concept made for Boxed Water',
        img: graphicDesign2
      },
      {
        title: 'Science',
        content: 'A poster made in collaboration with the Federal Art Project',
        img: graphicDesign3
      },
      
    ]
  }
]

export const linkCards = [
  {
    title: 'Web design',
    url: '/web-design',
    alt: 'Web Design',
    imgs: {
      mobile: webDesignMobile,
      tablet: webDesignTablet,
      desktop: webDesignDesktop,
      desktopSmall: webDesignDesktopSmall
    }
    
  },
  {
    title: 'App design',
    url: '/app-design',
    alt: 'App desgin',
    imgs: {
      mobile: appDesignMobile,
      tablet: appDesignTablet,
      desktop: appDesignDesktop,
    }
    
  },
  {
    title: 'Graphic design',
    url: '/graphic-design',
    alt: 'Graphic Design',
    imgs: {
      mobile: graphicDesignMobile,
      tablet: graphicDesignTablet,
      desktop: graphicDesignDesktop,
    }
    
  },

];