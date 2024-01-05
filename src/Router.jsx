import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import DesignPage from './pages/DesignPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {index: true, element: <Home />},
        {
          path: '/our-company',
          element: <About />
        },
        {
          path: '/locations',
          element: <Locations />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/design/:type',
          element: <DesignPage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Router;